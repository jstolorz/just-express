const express = require('express')
const helmet = require('helmet')
const path = require('path')

const app = express()

app.use(helmet())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.set('view engine','ejs')
//app.set('views',path.join(__dirname,'views'))

app.get('/abc',(req,res,next) => {
   res.render('index')
})

app.listen(4000)
console.log('Listening on port 4000')
