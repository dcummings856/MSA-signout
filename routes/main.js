const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.getMain)
router.post('/add', mainController.addSignouts)
router.put('/checkin/:id', mainController.checkIn)
router.get('/logs', mainController.getLogs)

module.exports = router