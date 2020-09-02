const router = require('express').Router();
const membersCtrl = require('../controllers/members');

router.get('/members', membersCtrl.index)






module.exports = router;