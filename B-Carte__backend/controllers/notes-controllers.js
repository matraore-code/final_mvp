const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Note = require('../models/note');
const User = require('../models/user');

const getNoteById = async (req, res, next) => {
    const noteId = req.params.nid;

    let note;
    try {
        note = await Note.findById(noteId);
    } catch (err) {
        const error = new HttpError("Something Went Wrong, we couldn't find Note by ID!", 500);
        return next(error);
    }

    if (!note) {
        const error = new HttpError("We couldn't Find Note for the provided ID!", 404);
        return next(error);
    }
    
    if (note.creator.toString() !== req.userData.userId) {
        const error = new HttpError('You have No Access To this Note!', 403);
        return next(error);
    }

    res.json({ note: note.toObject({ getters: true }) });
};

const getNotesByUserId = async (req, res, next) => {
    const userId = req.params.uid;

    if (userId !== req.userData.userId) {
        const error = new HttpError('You have No Access To this Note!', 403);
        return next(error);
    }

    let userWithNotes;
    try {
        userWithNotes = await User.findById(userId, '-password').populate('notes');
    } catch (err) {
        const error = new HttpError("Something Went Wrong, we couldn't find a Note!", 500);
        return next(error);
    }

    if (!userWithNotes || userWithNotes.notes.length === 0) {
        const error = new HttpError("Could not find a Note for the provided User id!", 404);
        return next(error);
    }
    if (userWithNotes && userWithNotes.formule !== "Premium") {
        const error = new HttpError("The users with the Basique or Standard account can't have Notes!", 403);
        return next(error);
    }

    res.json({ notes: userWithNotes.notes.map(note => note.toObject({ getters: true })) });
};

const createNote = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError("Invalid Inputs, Please check Your Data!", 442);
        return next(error);
    }

    let user;
    try {
        user = await User.findById(req.userData.userId, '-password');
    } catch (err) {
        const error = new HttpError("Could Not create Note, Please Try again!", 500);
        return next(error);
    }
    
    if (!user) {
        const error = new HttpError("We Could not Find User for Provided ID, Please check Your Data!", 404);
        return next(error);
    }

    if (user.formule !== "Premium")
    {
        const error  = new HttpError("User With Basique or Standard Account, can't create a Note!", 403);
        return next(error);
    }
    const { description } = req.body;

    const createdNote = new Note({
        description: description,
        creator: req.userData.userId
    });

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdNote.save({ session: sess });
        user.notes.push(createdNote);
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError("Creating Note Failed, Please try again!", 500);
        return next(error);
    }

    res.status(201).json({ note: createdNote });
};

const updateNote = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError("Invalid Inputs, Please check Your Data!", 442);
        return next(error);
    }

    const { description } = req.body;
    const noteId = req.params.nid;

    let note;
    try {
        note = await Note.findById(noteId);
    } catch (err) {
        const error = new HttpError("Something Wnet Wrong, we couldn't Update Note!", 500);
        return next(error);
    }

    if (note.creator.toString() !== req.userData.userId) {
        const error = new HttpError("You are not allowed to Edit this Note!", 401);
        return next(error);
    }

    note.description = description;

    try {
        await note.save();
    } catch (err) {
        const error = new HttpError("Something Went Wrong, we couldn't Update Note!", 500);
        return next(error);
    }

    res.status(200).json({ note: note.toObject({ getters: true }) });
};

const deleteNote = async (req, res, next) => {
    const noteId = req.params.nid;

    let note;
    try {
        note = await Note.findById(noteId).populate('creator');
    } catch (err) {
        const error = new HttpError("Invalid Inputs, Please check Your Data!", 442);
        return next(error);
    }

    if (!note) {
        const error = new HttpError("Couldn't find Note for the provided ID!", 404);
        return next(error);
    }

    if (note.creator.id !== req.userData.userId) {
        const error = new HttpError("You are not Allowed to Delete this Note!", 401);
        return next(error);
    }

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await note.remove({ session: sess });
        note.creator.notes.pull(note);
        await note.creator.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError("Something Went Wrong, we couldn't Delete Note!", 500);
        return next(error);
    }

    res.status(200).json({ message: "Note Deleted Successfully." });
};

exports.getNoteById = getNoteById;
exports.getNotesByUserId = getNotesByUserId;
exports.createNote = createNote;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;