const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rappelSchema = new Schema({
    description: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now, min: '2021-08-01' },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model('Rappel', rappelSchema)