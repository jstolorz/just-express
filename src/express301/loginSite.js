const path = require('path')

const  session = require('express-session')
const express = require('express')
const app = express()

const helmet = require('helmet')

app.use(helmet())

app.use(session({secret: 'keyboard cat', cookie: {}}))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded())
app.use((req,res,next) =>{
    if(req.query.msg === 'fail'){
        res.locals.msg = `Sorry. Username or password doesnt exist!`
    }else {
        res.locals.msg =``
    }

    next()
})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.param('id',(req,res,next,id) => {
    console.log(`Param called id: ${id}`)
    next()
})

app.get('/',(req,res,next) => {
   res.render('index')
})

app.get('/login',(req,res,next) => {
    res.render('login')
})

app.post('/process_login',(req,res,next) => {
    const password = req.body.password
    const username = req.body.username

    if(password === 'x'){
        req.session.username = username
        res.redirect('/welcome')
    }else {
       res.redirect('/login?msg=fail&test=hello')
    }
})

app.get('/story/:id',(req,res,next) => {
    res.send(`<h2>Story ${req.params.id}</h2>`)
})

app.get('/welcome',(req,res,next) => {
    res.render('welcome',{
        username: req.session.username
    })
})

app.get('/statement',(req,res,next) => {
    res.download(path.join(__dirname,'/userStatements/BankStatementChequing.png'))

})

app.get('/logout',(req,res,next) => {
    req.session.destroy()
    res.redirect('/login?msg=bye')
})

app.listen(3000)

