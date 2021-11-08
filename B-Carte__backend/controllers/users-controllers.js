const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

const User = require('../models/user');

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

exports.getUserById = getUserById;
exports.signup = signup;