const express = require('express');

const countriesControllers = require('../controllers/countries-controllers');

const router = express.Router();

router.get('/', countriesControllers.getCountries);

module.exports = router;