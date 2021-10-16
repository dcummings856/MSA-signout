const express = require('express')
const connectDB = require('./config/database')
const app = express()
const connectDB = require("./config/database")

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('main.ejs')
})

app.listen(process.env.PORT || PORT), () => {
  console.log(`Listening on ${PORT}`)
}