const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.getMain)
router.get('/add', mainController.addSignouts)

module.exports = router