const express = require('express')
const connectDB = require('./config/database')
const app = express()
const morgan = require('morgan')
const methodOverride = require("method-override")
const mainRoute = require('./routes/main')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(morgan("dev"))

app.use(methodOverride("_method"))

app.use('/', mainRoute)
app.use('/logs', mainRoute)

app.listen(process.env.PORT, () => {
  console.log('Listening...')
})