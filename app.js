const express = require("express")

const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'public/views'))


app.get('/', (req, res)=>{
    res.render('index', {title: 'Pomodoro app'})
})


app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})

