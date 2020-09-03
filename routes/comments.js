const router = require('express').Router()

const commentsCtrl = require('../controllers/comments')

router.post('/:id/posts/:pid/comments', isLoggedIn , commentsCtrl.create)
router.delete('/:id/posts/:pid/comments/:cid', isLoggedIn, commentsCtrl.deleteComment)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
