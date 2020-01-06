  
const User = require('../models/User');

module.exports = {
  async index(req, res){
    const { name } = req.query;
    console.log('name', name);

    const user = await User.findOne({ name });
    console.log(user);


    return res.json(user);
  },

  async store(req, res) {
    console.log(req.body);
    console.log(req.file);
    const { name, score } = req.body;
    const { filename } = req.file;

    let user = await User.findOne({ name })

    if(!user) {
      user = await User.create({ name, image: filename, score });
    }
    return res.json(user);
  }
}