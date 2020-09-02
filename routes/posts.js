const router = require('express').Router();
const postsCtrl = require('../controllers/posts');

router.post('/', postsCtrl.create)






module.exports = router;