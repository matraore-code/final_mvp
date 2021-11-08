const express = require('express');
const { check } = require('express-validator');

const mailerControllers = require('../controllers/mailer-controller');

const router = express.Router();

router.post('/', 
    [
        check('name').not().isEmpty(),
        check('surname').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('message').not().isEmpty()
    ],
    mailerControllers.sendEmail
);

module.exports = router;