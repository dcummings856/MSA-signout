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
      let dt = DateTime.now().setZone("America/New_York")
      let dtLocal = dt.toLocaleString(DateTime.DATETIME_MED)
      await Signouts.create({
        name: req.body.name,
        msa: req.body.msa,
        key: req.body.key,
        complete: false,
        createdAt: dtLocal,
        updatedAt: "",
      })
      console.log('new signout')
      res.redirect('/')
    }catch(err) {
      console.log(err)
    }
  },
  checkIn: async (req, res) => {
    try{
      let dt = DateTime.now().setZone("America/New_York")
      let dtLocal = dt.toLocaleString(DateTime.DATETIME_MED)
      await Signouts.findOneAndUpdate(
        {_id: req.params.id },
        { complete: true,
          updatedAt: dtLocal
        },
      )
      console.log('checked in')
      res.redirect('/')
    }catch(err) {
      console.log(err)
    }
  },
  getLogs: async (req, res) => {
    try{
      const signouts = await Signouts.find().sort({ updatedAt: "desc" })
      res.render('logs.ejs', { signouts: signouts })
    }catch(err) {
      console.log(err)
    }
  },
}