const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    avatar: String,
    googleId: String
}, { timestamp: true })




module.exports = mongoose.model('User', UserSchema);