const express = require('express')
const router = express.Router()
const TaskController = require('./controllers/taskController')

router.get('/', TaskController.dashboard)

router.post('/task', TaskController.create_task)

module.exports = router