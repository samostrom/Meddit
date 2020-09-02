const Sub = require('../models/sub');

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
    console.log(req.params.id)
    Sub.findById(req.params.id, function(err) {
        if(err) return res.redirect('/subs');
        res.render("meddit/new", )
    });
}