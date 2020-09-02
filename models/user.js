const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String
}, { timestamp: true })




module.exports = mongoose.model('User', UserSchema);