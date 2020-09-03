const router = require('express').Router();
const postsCtrl = require('../controllers/posts');


router.post('/:id/posts',isLoggedIn, postsCtrl.create);
router.get('/:id/posts/:pid',isLoggedIn, postsCtrl.showNewPost);
router.delete('/:id/posts/:pid',isLoggedIn, postsCtrl.deletePost);
router.put('/:id/posts/:pid',isLoggedIn, postsCtrl.editPost);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;