const Sub = require('../models/sub');
const Post = require('../models/post');

module.exports = {
    index,
    create,
    showNewSub
}

function index(req, res) {
    Sub.find({}, function(err, sub){
        if (err) return res.redirect('/subs');
        res.render('meddit/allSubs', {sub})
    });
}

function create(req,res,next) {
    Sub.create(req.body, function(err){
        if (err) return res.redirect('/subs');
        res.redirect('/subs')
    });
}

function showNewSub(req, res, next) {
    Sub.findById(req.params.id).populate('members').exec(function(err, sub) {
        Post.find({sub:req.params.id}, function(err, posts){
            if(err) return res.redirect('/subs');
            res.render("meddit/allPosts", {sub, posts})
        })
    });
}