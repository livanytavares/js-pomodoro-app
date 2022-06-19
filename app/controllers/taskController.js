// var Task = require('../models/task')

exports.dashboard = (req, res) => {
    res.render('index', {title: 'Pomodoro app'})
}
