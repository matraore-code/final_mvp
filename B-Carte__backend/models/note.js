const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    description: { type: String, required:true },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Note', noteSchema);