const express = require('express')
const helmet = require('helmet')
const path = require('path')

const app = express()

app.use(helmet())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.set('view engine','pug')
//app.set('views',path.join(__dirname,'views'))

const validateUser = (req,res,next) => {
   res.locals.validated = true
   next()
}

app.use(validateUser)

app.get('/abc',(req,res,next) => {
   res.render('index',{
      country: {
         name: 'Poland',
         capital: 'Warsaw'
      },
      peoples: [{
        name: 'janusz',
        age: 53
      },{
         name: 'iwona',
         age: 52
      }],
      msg: 'Success',
      msg2: "Failure!",
      html: `<h2>Hello from HTML</h2>
            <p>sdsdsdsddsdsddsdssds</p>`
   })
})

app.listen(4000)
console.log('Listening on port 4000')
