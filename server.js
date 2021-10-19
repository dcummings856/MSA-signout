const express = require('express')
const connectDB = require('./config/database')
const app = express()
const mainRoute = require('./routes/main')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', mainRoute)

app.listen(process.env.PORT || PORT), () => {
  console.log(`Listening on ${PORT}`)
}