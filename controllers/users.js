const User = require('../models/user');

module.exports = {
    index
}

function index(req, res, next) {
    res.render('index')
}

// I need to under what the .sort is doing 