const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mailSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: false },
    profession: { type: String, required: false },
    message: { type: String, required: true, minlength: 15 },
});

module.exports = mongoose.model('Mail', mailSchema);