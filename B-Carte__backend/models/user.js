const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    formule: { type: String, required: true },
    cards: [{ type: String, required:false }],
    image: { type: String, required: false },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    address: { type: String, required: true },
    codePostal: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profession: { type: String, required:true },
    password: { type: String, required: false },
    telephone: { type: String, required: true },
    whatsapp: { type: String, required: false },
    linkedin: { type: String, required: false },
    instagram: { type: String, required: false },
    facebook: { type: String, required: false },
    fax: { type: String, required: false },
    github: { type: String, required: false },
    biography: { type: String, required: true },
    users: [{ type: mongoose.Types.ObjectId, required: false, ref: 'User' }],
    notes: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Note' }],
    rappels: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Rappel' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);