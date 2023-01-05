const express = require("express")
const bodyParser = require("body-parser")
const exphbs = require('express-handlebars')
//links database api
require('./api/connections/db')
const app = express()
const PORT = process.env.PORT || 8080
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.engine("handlebars", exphbs({defaultLayout:"main"}))
app.set("view engine","handlebars")

app.use(express.static('./app/public'))

const htmlRoutes = require('./app/routing/htmlRoutes')
app.use('/', htmlRoutes)

app.get('/here',(req,res)=>{
    res.send('llppllppllppl')
})

const acctRoutes = require('./app/routing/acctRoutes')
app.use('/', acctRoutes)

const workBookRoute = require('./app/routing/workBookRoute')
app.use('/', workBookRoute)

const apiRouter = require('./api/routes/dbRoutes')
app.use('/', apiRouter)

const errorRoute = require('./app/routing/errorRoute.js')
app.use('/', errorRoute)

app.listen(PORT,()=>{
    console.log("App listening on PORT " + PORT)
})




