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
        name: req.name,
        msa: req.msa,
        key: req.key,

      })
      res.redirect('/')
    }catch(err) {
      console.log(err)
    }
  }
}