const router = require('express').Router()

const commentsCtrl = require('../controllers/comments')

router.post('/comments', commentsCtrl.create)


module.exports = router;
