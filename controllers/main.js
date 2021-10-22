const Signouts = require('../models/Signouts')

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
      await Signouts.create({
        name: req.body.name,
        msa: req.body.msa,
        key: req.body.key,
        complete: false,
        createdAt: req.Date,
      })
      console.log('new signout')
      res.redirect('https://msa-signout.herokuapp.com/')
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
      res.redirect('https://msa-signout.herokuapp.com/')
    }catch(err) {
      console.log(err)
    }
  }
}