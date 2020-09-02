const router = require('express').Router();
const postsCtrl = require('../controllers/posts');


router.post('/posts', postsCtrl.create)
router.get('/posts/:id', postsCtrl.showNewPost)





module.exports = router;