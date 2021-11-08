const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const Mail = require('../models/mail');

const sendEmail = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new HttpError("Invalid Inputs, Please check Your Data!", 442);
      return next(error);
    }
    
    const { name, surname, email, telephone, profession, message } = req.body;

    const createdMail = new Mail({
      name: name,
      surname: surname,
      email: email,
      telephone: telephone || '',
      profession: profession || '',
      message: message
    });

    try {
      await createdMail.save();
    } catch (err) {
      const error = new HttpError("Creating Mail Failed, Please try again!", 500);
      return next(error);
    }
    res.status(200).json({ message: "Message Sent With Success." });
};

exports.sendEmail = sendEmail;