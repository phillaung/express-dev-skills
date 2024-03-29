var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.post('/create', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)
router.get('/:id/edit', skillsCtrl.edit)
router.put('/:id', skillsCtrl.update)

module.exports = router;
