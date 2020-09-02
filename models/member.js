const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String
}, { timestamp: true })




module.exports = mongoose.model('Member', memberSchema);