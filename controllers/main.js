const Signouts = require('../models/Signouts')
const { DateTime } = require('luxon')

module.exports = {
  getMain: async (req, res) => {
    try{
      const signouts = await Signouts.find()
      res.render('main.ejs', { signouts: signouts })
    }catch(err) {
      console.log(err)
    }
  },
  addSignouts: async (req, res) => {
    try{
      let dt = DateTime.now()
      let dtLocal = dt.toLocaleString(DateTime.DATETIME_MED)
      await Signouts.create({
        name: req.body.name,
        msa: req.body.msa,
        key: req.body.key,
        complete: false,
        createdAt: dtLocal,
      })
      console.log('new signout')
      res.redirect('/')
    }catch(err) {
      console.log(err)
    }
  },
  checkIn: async (req, res) => {
    try{
      await Signouts.findOneAndUpdate(
        {_id: req.params.id },
        { complete: true },
      )
      console.log('checked in')
      res.redirect('/')
    }catch(err) {
      console.log(err)
    }
  }
}