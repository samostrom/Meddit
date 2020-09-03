const router = require('express').Router();
const postsCtrl = require('../controllers/posts');


router.post('/:id/posts', postsCtrl.create);
router.get('/:id/posts/:pid', postsCtrl.showNewPost);
router.delete('/:id/posts/:pid', postsCtrl.delete)




module.exports = router;