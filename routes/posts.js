const router = require('express').Router();
const postsCtrl = require('../controllers/posts');


router.post('/:id/posts', postsCtrl.create)
router.get('/:id/posts/:pid', postsCtrl.showNewPost)





module.exports = router;