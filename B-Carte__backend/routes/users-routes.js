const express = require('express');
const { check } = require('express-validator');

const fileUpload = require('../middleware/file-upload');
const usersControllers = require('../controllers/users-controllers');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/:uid', usersControllers.getUserById);

router.post('/signup',
    fileUpload.single('image'),
    [
        check('formule').not().isEmpty(),
        check('name').not().isEmpty(),
        check('surname').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('telephone').not().isEmpty(),
        check('profession').not().isEmpty(),
        check('address').not().isEmpty(),
        check('codePostal').not().isEmpty(),
        check('city').not().isEmpty(),
        check('country').not().isEmpty(),
        check('biography').not().isEmpty()
    ],
    usersControllers.signup
);

module.exports = router;