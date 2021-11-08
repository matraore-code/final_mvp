const mongoose = require('mongoose');

const HttpError = require('../models/http-error');

const Country  = require('../models/country');

const getCountries = async (req, res, next) => {
    let countries;
    try {
        countries = await Country.find({});
    } catch (err) {
        const error = new HttpError("Fetching Countries Failed, Please Try again!", 500);
        return next(error);
    }

    res.json({ countries: countries });
};

exports.getCountries = getCountries;