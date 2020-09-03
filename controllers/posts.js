const Post = require('../models/post');



module.exports = {
    create,
    showNewPost,
    deletePost,
    editPost

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

function deletePost(req, res) {
    Post.findOneAndDelete(req.params.pid, function(err){
        if(err) console.log(err);
        res.redirect(`/subs/${req.params.id}`)
    });
}

function editPost(req, res) {
    Post.findOneAndUpdate(req.params.pid, req.body, function(err){
        if(err) console.log(err);
        res.redirect(`/subs/${req.params.id}`)
    });   
}