const Post = require('../models/post');


module.exports = {
    create,
    showNewPost
}

function create(req, res, next) {
    Post.create(req.body, function(err){
        if (err) return res.redirect('/subs/:id/posts');
        res.redirect('/subs/:id')
    });
}

function showNewPost(req, res) {
    Post.findById(req.params.id, function(err, comments){
        if (err) return res.redirect('sub/:id/posts');
        res.render('meddit/allComments', {comments})
    })
}
