
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    text: String,
    url: String,
    members: {type: mongoose.Schema.Types.ObjectId, ref: 'Member'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Sub', subSchema)