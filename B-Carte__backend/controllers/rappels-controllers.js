const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Rappel = require('../models/rappel');
const User = require('../models/user');
const note = require('../models/note');

const getRappelById = async (req, res, next) => {
    const rappelId = req.params.rid;

    let rappel;
    try {
        rappel = await Rappel.findById(rappelId);
    } catch (err) {
        const error = new HttpError("Something Went Wrong, we couldn't find Rappel by ID!", 500);
        return next(error);
    }

    if (!rappel) {
        const error = new HttpError("We couldn't Find Rappel for the provided ID!", 404);
        return next(error);
    }

    if (rappel.creator.toString() !== req.userData.userId) {
        const error = new HttpError('You have No Access To this Rappel!', 403);
        return next(error);
    }

    res.json({ rappel: rappel.toObject({ getters: true }) });
};

const getRappelByUserId = async (req, res, next) => {
    const userId = req.params.uid;

    if (userId !== req.userData.userId) {
        const error = new HttpError('You have No Access To this Rappel!', 403);
        return next(error);
    }

    let userWithRappels;
    try {
        userWithRappels = await User.findById(userId, '-password').populate('rappels');
    } catch (err) {
        const error = new HttpError("Something Went Wrong, we couldn't find a Rappel!", 500);
        return next(error);
    }

    if (!userWithRappels || userWithRappels.rappels.length === 0) {
        const error = new HttpError("Could not find a Rappel for the provided User id!", 404);
        return next(error);
    }

    if (userWithRappels && userWithRappels.formule !== "Premium") {
        const error = new HttpError("The users with Basique or Standard account can't have Rappels!", 403);
        return next(error);
    }

    res.json({ rappels: userWithRappels.rappels.map(rappel => rappel.toObject({ getters: true })) });
};

const createRappel = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError("Invalid Inputs, Please check Your Data!", 442);
        return next(error);
    }

    let user;
    try {
        user = await User.findById(req.userData.userId, '-password');
    } catch(err) {
        const error = new HttpError("Could Not Create Rappel, Please Try again!", 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError("We couldn't find User for Provided ID, Please check Your Data!", 404);
        return next(error);
    }

    if (user.formule !== "Premium") {
        const error = new HttpError("User With Basique or Standard Account, can't create a Rappel!", 403);
        return next(error);
    }

    const { description, date } = req.body;

    const createdRappel = new Rappel({
        description: description,
        date: Date.parse(date),
        creator: req.userData.userId
    });

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdRappel.save({ session: sess });
        user.rappels.push(createdRappel);
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError("Creating Rappel Failed, Please Try again!", 500);
        return next(error);
    }

    res.status(201).json({ rappel: createdRappel });
};

const updateRappel = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError("Invalid Inputs, Please check Your Data!", 442);
        return next(error);
    }

    const { description, date } = req.body;
    const rappelId = req.params.rid;

    let rappel;
    try {
        rappel = await Rappel.findById(rappelId);
    } catch (err) {
        const error = new HttpError("Something Went Wrong, we Couldn't Update Rappel!", 500);
        return next(error);
    }

    if (rappel.creator.toString() !== req.userData.userId) {
        const error = new HttpError("You are not allowed to Edit this Rappel!", 401);
        return next(error);
    }

    rappel.description = description;
    rappel.date = Date.parse(date);

    try {
        await rappel.save();
    } catch (err) {
        const error = new HttpError("Something Went Wrong, we couldn't Update Rappel!", 500);
        return next(error);
    }

    res.status(200).json({ rappel: rappel.toObject({ getters: true }) });
};

const deleteRappel = async (req, res, next) => {
    const rappelId = req.params.rid;

    let rappel;
    try {
        rappel = await Rappel.findById(rappelId).populate('creator');
    } catch (err) {
        const error = new HttpError("Invalid Inputs, Please check Your Data!", 442);
        return next(error);
    }

    if (!rappel) {
        const error = new HttpError("Couldn't find Rappel for the provided ID!", 404);
        return next(error);
    }

    if (rappel.creator.id !== req.userData.userId) {
        const error = new HttpError("You are not Allowed to Delete this Rappel!", 401);
        return next(error);
    }

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await rappel.remove({ session: sess });
        rappel.creator.rappels.pull(rappel);
        await rappel.creator.save({ session:sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError("Something Went Wrong, we couldn't Delete Rappel!", 500);
        return next(rappel);
    }

    res.status(200).json({ message: "Rappel Deleted Successfully!" });
};

exports.getRappelById = getRappelById;
exports.getRappelByUserId = getRappelByUserId;
exports.createRappel = createRappel;
exports.updateRappel = updateRappel;
exports.deleteRappel = deleteRappel;