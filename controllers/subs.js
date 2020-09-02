const Sub = require('../models/sub');

module.exports = {
    index,
    create,
    show,
    // showNewSub
}

function index(req, res) {
    res.render('meddit/allSubs')
}

function create(req,res,next) {
    Sub.create(req.body, function(err){
        if (err) return res.redirect('/subs');
        res.redirect('/subs')
    });
}

function show(req,res,next) {
    Sub.find({}, function(err, subs){
      if (err) return res.redirect('/subs');
      console.log(subs)
      res.render('meddit/allSubs')  
    });
}

// function showNewSub(req, res, next) {
//     Sub.findById(req.params.id, function(err, sub) {
//         if(err) return res.redirect('/subs');
//         res.render("meddit/new", )
//     })
// }