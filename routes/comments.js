const router = require('express').Router()

const commentsCtrl = require('../controllers/comments')

router.post('/:id/posts/:pid/comments', commentsCtrl.create)


module.exports = router;
