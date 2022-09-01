const express = require('express')
const helmet = require('helmet')
const router = require('./theRouter')
const userRouter = require('./userRouter')
const path = require("path");


const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,'public')))

app.use('/',router)
app.use('/user',userRouter)

app.listen(3000)
