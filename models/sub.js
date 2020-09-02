

const mongoose = require('mongoose');

const subSchema = new mongoose.Schema({
    name: String,
    description: String,
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'Member'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Sub', subSchema)