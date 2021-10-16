const express = require('express')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('main.ejs')
})

app.listen(process.env.PORT || PORT), () => {
  console.log(`Listening on ${PORT}`)
}