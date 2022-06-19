const express = require("express")
const router = require('./app/router')

const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'public/views'))

app.use('/', router)

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})
