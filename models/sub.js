

const mongoose = require('mongoose');

const SubSchema = new mongoose.Schema({
    name: String,
    description: String,
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Sub', SubSchema)