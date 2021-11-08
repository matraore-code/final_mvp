const vCardsJS = require('vcards-js');
const fs = require('fs');

const HttpError = require('../models/http-error');

const User = require('../models/user');

const generateVCard = async (req, res, next) => {
    const UserId = req.params.uid;

    let user;
    try {
        user = await User.findById(UserId);
    } catch (err) {
        const error = new HttpError("Fetching User Failed, Please Try again!", 500);
        return next(error);
    }

    if (!user) {
        const error = new HttpError("No User Found, Please check your login!", 403);
        return next(error);
    }

    //create a new vCard
    var vCard = vCardsJS();

    //set properties
    vCard.firstName = user.surname;
    vCard.lastName = user.name;
    vCard.email = user.email;
    vCard.homeAddress.city = user.city;
    vCard.homeAddress.countryRegion = user.country;
    vCard.homeAddress.postalCode = user.codePostal;
    vCard.homeAddress.street = user.address;
    vCard.photo.attachFromUrl(user.image);
    vCard.workPhone = user.telephone;
    vCard.title = user.profession;
    vCard.url = user.linkedin || user.instagram || user.facebook || user.tiktok || '';
    vCard.saveToFile(`./uploads/contacts/${user._id}.vcf`);
    res.json({ UserId: user._id, link: `uploads/contacts/${user._id}.vcf`});
};

exports.generateVCard = generateVCard;