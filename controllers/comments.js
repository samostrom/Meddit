const Post = require('../models/post');


module.exports = {
    create
};

function create(req, res) {
    Post.findById(req.params.pid, function(err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/subs/${req.params.id}/posts/${req.params.pid}`)
        });
    });
}