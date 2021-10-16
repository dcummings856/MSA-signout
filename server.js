const express = require('express')
const app = express()

require('dotenv').config({path: './config/.env'})

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