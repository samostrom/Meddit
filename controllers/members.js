const Member = require('../models/member');

module.exports = {
    index
    
}


function index(req, res, next) {
    res.render('meddit/index', {title: "Meddit"})
}

// I need to under what the .sort is doing 