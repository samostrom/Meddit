const Post = require('../models/post');


module.exports = {
    create,
    deleteComment
};

function create(req, res) {
    Post.findById(req.params.pid, function(err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/subs/${req.params.id}/posts/${req.params.pid}`)
        });
    });
}

function deleteComment(req, res) {
    Post.findById(req.params.pid, function(err, post){
       post.comments.splice(post.comments.findIndex(c => c._id.equals(req.params.cid)), 1);
            post.save(function(err) {
                res.redirect(`/subs/${req.params.id}/posts/${req.params.pid}`) 
       })
    })
}

// function deleteComment(req, res) {
//     Post.findById(req.params.pid, function(err, post){
//         post.comments.pull(req.params.cid, function(err){
//             res.redirect(`/subs/${req.params.id}/posts/${req.params.pid}`)
//         });
//     });
// }