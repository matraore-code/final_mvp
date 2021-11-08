const express = require('express');
const { check } = require('express-validator');

const rappelsControllers = require('../controllers/rappels-controllers');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.use(checkAuth);

router.get('/:rid', rappelsControllers.getRappelById);

router.get('/user/:uid', rappelsControllers.getRappelByUserId);

router.post('/', 
    [
        check('description').not().isEmpty(),
        check('date').isDate()
    ],
    rappelsControllers.createRappel
);

router.patch('/:rid', 
    [
        check('description').not().isEmpty(),
        check('date').isDate()
    ],
    rappelsControllers.updateRappel
);

router.delete('/:rid', rappelsControllers.deleteRappel);

module.exports = router;