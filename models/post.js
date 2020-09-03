
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Member'},
    replies: [this]
}, {
    timestamps: true
});

const postSchema = new mongoose.Schema({
    title: String,
    text: String,
    url: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Member'},
    sub: {type: mongoose.Schema.Types.ObjectId, ref: 'Sub'},
    comments: [commentSchema]
}, {
    timestamps: true
});



module.exports = mongoose.model('Post', postSchema);