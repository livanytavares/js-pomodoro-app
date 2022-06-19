const express = require('express')
const router = express.Router()
const TaskController = require('./controllers/taskController')

router.get('/', TaskController.dashboard)

router.post('/task')

module.exports = router