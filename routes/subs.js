const router = require('express').Router();
const subsCtrl = require('../controllers/subs');




router.get('/', isLoggedIn, subsCtrl.index);
router.post('/', isLoggedIn, subsCtrl.create);
router.get('/:id', isLoggedIn, subsCtrl.showNewSub);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;