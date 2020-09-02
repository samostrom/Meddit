const router = require('express').Router();
const subsCtrl = require('../controllers/subs');




router.get('/', subsCtrl.index);
router.post('/', subsCtrl.create);
router.get('/:id', subsCtrl.showNewSub);





module.exports = router;