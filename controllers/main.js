const Signouts = require('../models/Signouts')

module.exports = {
  getMain: async (req, res) => {
    try{
      res.render('main.ejs')
    }catch(err) {
      console.log(err)
    }
  }
}