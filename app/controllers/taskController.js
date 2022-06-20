// var Task = require('../models/task')

exports.dashboard = (req, res) => {
    res.render('index', {title: 'Pomodoro app'})
}

exports.create_task = (req, res) => {
    console.log(req.body)

    res.send("Create a task is beein implemented")
}