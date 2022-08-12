const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.get('/',(req,res) => {
    res.sendFile('index.html')
})

app.all('*',(req,res) => {
    res.status(404).send('<h2 style="color: red;">Page does not exist</h2>')
})

app.listen(3000)



