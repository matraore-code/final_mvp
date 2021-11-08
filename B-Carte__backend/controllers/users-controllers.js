const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

const User = require('../models/user');

const getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({}, '-password');
    } catch (err) {
        const error = new HttpError('Fetching Users failed, please try again later!', 422);
        return next(error);
    }
    res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

const getUserById = async (req, res, next) => {
    const userId = req.params.uid;
    let user;
    try {
        user = await User.findById(userId, '-password -notes -rappels -cards -users');
    } catch (err) {
        const error = new HttpError('Fetching User failed, please try again later!', 422);
        return next(error);
    }
    if (!user) {
        const error = new HttpError("No User Found, Please check your login!", 403);
        return next(error);
    }

    res.json({ user: user.toObject({ getters: true }) });
};

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError('Invalid Inputs Passed, Please Check your Data!', 422);
        return next(error);
    }

    const { email } = req.body;
    
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email }, '-password');
    } catch (err) {
        const error = new HttpError('Signing Up Failed, Please Try Again Later!', 500);
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError('User exists Already, Please Login Instead!', 422);
        return next(error);
    }

    const createdUser = new User({
        formule: req.body.formule,
        image: req.file && req.file.path || '',
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.address,
        codePostal: req.body.codePostal,
        city: req.body.city,
        country: req.body.country,
        email: email,
        password: "", 
        profession: req.body.profession,
        telephone: req.body.telephone,
        whatsapp: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        fax: "",
        github: "",
        biography: req.body.biography,
        users: [],
        notes: [],
        rappels: []
    });

    try {
        await createdUser.save();
    } catch (err) {
        console.log(err);
        const error = new HttpError('Signing Up Failed, Please Try again!', 500);
        return next(error);
    }

    let token;

    try {
        token = jwt.sign(
            { userId: createdUser.id, email: email },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        );
    } catch (err) {
        const error = new HttpError('Signing Up Failed, Please Try again!', 500);
        return next(error);
    }

    res.status(201).json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError("Logging In Failed, Please Try again Later!", 500);
        return next(error);
    }

    if (!existingUser) {
        const error = new HttpError("Invalid Credentials, Could not Login!", 403);
        return next(error);
    }

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new HttpError("Could not Log you in, Please check your Credentials and Try again!", 500);
        return next(error);
    }

    if (!isValidPassword) {
        const error = new HttpError("Invalid Credentials, Could not Log you in!", 403);
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            { userId: existingUser.id, email: existingUser.email },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        );
    } catch (err) {
        const error = new HttpError("Logging in Failed, Please Try again!", 500);
        return next(error);
    }

    res.json({ userId: existingUser.id, email: existingUser.email, token: token });
};

const updateUser = async (req, res, next) => {
    const userId = req.params.uid;
    if (userId !== req.userData.userId) {
        const error = new HttpError('You have No Access To this User!', 403);
        return next(error);
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) { 
        const error = new HttpError("Invalid Inputs Passed, Please check Your Data!", 442);
        return next(error);
    }

    const {
        formule,
        name,
        surname,
        address,
        codePostal,
        country,
        email,
        profession,
        telephone,
        whatsapp,
        linkedin,
        instagram,
        facebook,
        fax,
        github,
        biography
    } = req.body;

    let user;
    try {
        user = await User.findById(req.userData.userId, '-password');
    } catch (err) {
        const error = new HttpError("Updating User Failed, Please Try again!", 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError("User Doesn't exist, check Your Data again!", 403);
        return next(error);
    }

    user.formule = formule || user.formule;
    user.image = req.file && req.file.path || user.image,
    user.name = name || user.name;
    user.surname = surname || user.surname;
    user.address = address || user.address;
    user.codePostal = codePostal || user.codePostal;
    user.country = country || user.country;
    user.email = email || user.email;
    user.profession = profession || user.profession;
    user.telephone = telephone || user.telephone;
    user.whatsapp = whatsapp || user.whatsapp;
    user.linkedin = linkedin || user.linkedin;
    user.instagram = instagram || user.instagram;
    user.facebook = facebook || user.facebook;
    user.fax = fax || user.fax;
    user.github = github || user.github;
    user.biography = biography || user.biography;

    try {
        await user.save();
    } catch (err) {
        const error = new HttpError("Updating User Failed, Please Try again!", 500);
        return next(error);
    }

    res.status(200).json({ user: user.toObject({ getters:true }) });
};

const addFriend = async (req, res, next) => {
    const friendId = req.params.fid;

    if (friendId === req.userData.userId) {
        const error = new HttpError("Trying to add Yourself as a Friend does it sound logic to you!", 403);
        return next(error);
    }

    let existingFriend;
    let user;
    try {
        existingFriend = await User.findById(friendId, '-password');
        user = await User.findById(req.userData.userId, '-password');
    } catch (err) {
        const error = new HttpError("Adding Friend Failed, Please Try again!", 500);
        return next(error);
    }

    if (!existingFriend) {
        const error = new HttpError("Trying to Add Friend Doesn't exist!", 404);
        return next(error);
    }

    if (user.users.includes(existingFriend.id)) {
        const error = new HttpError("Trying To Add Friend More than one Time", 402);
        return next(error);
    }

    try {
        user.users.push(existingFriend);
        await user.save();
    } catch (err) {
        const error = new HttpError("Adding Friend Failed, Please Try again!", 500);
        return next(error);
    }

    res.status(200).json({ friend: existingFriend.toObject({ getters: true }) });
};

const removeFriend = async (req, res, next) => {
    const friendId = req.params.fid;

    if (friendId == req.userData.userId) {
        const error = new HttpError("Trying to remove yourself from list friends, how logic is that!", 403);
        return next(error);
    }

    let existingFriend;
    let user;
    try {
        existingFriend = await User.findById(friendId, '-password');
        user = await User.findById(req.userData.userId, '-password');
    } catch (err) {
        const error = new HttpError("Remove Friend Failed, Please Try again!", 500);
        return next(error);
    }

    if (!existingFriend) {
        const error = new HttpError("Trying to Remove Friend Doesn't exist!", 404);
        return next(error);
    }

    if (!user.users.includes(existingFriend.id)) {
        const error = new HttpError("Trying To Remove a non Friend!", 402);
        return next(error);
    }

    try {
        user.users.pop(existingFriend);
        await user.save();
    } catch (err) {
        const error = new HttpError("Removing Friend Failed, Please Try again!", 500);
        return next(error);
    }

    res.status(200).json({ message: "Friend Deleted Successfully!" });
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.signup = signup;
exports.login = login;
exports.updateUser = updateUser;
exports.addFriend = addFriend;
exports.removeFriend = removeFriend;