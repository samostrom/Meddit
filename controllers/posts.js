const Post = require('../models/post');
const comments = require('./comments');


module.exports = {
    create,
    showNewPost
}

function create(req, res, next) {
    req.body.sub = req.params.id
    Post.create(req.body, function(err){
        if (err) return res.redirect(`/subs/${req.params.id}`);
        res.redirect(`/subs/${req.params.id}`)
    });
}

function showNewPost(req, res) {
    Post.findById(req.params.pid, function(err, post){
        if (err) return res.redirect(`/subs/${req.params.id}`);
        res.render('meddit/allComments', {post})
    })
}


