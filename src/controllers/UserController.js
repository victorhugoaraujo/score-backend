  
const User = require('../models/User');

module.exports = {
  async index(req, res){
    const { tagName } = req.query;

    const user = await User.findOne({ tagName });

    return res.json(user);
  },

  async store(req, res) {
    const { name, score, scoreDescription, tagName } = req.body;
    const { filename } = req.file;

    let user = await User.findOne({ name })

    if(!user) {
      user = await User.create({ name, image: filename, score, scoreDescription, tagName });
    }
    return res.json(user);
  },

  async update(req, res){
    const { id, score} = req.body;

    const user = await User.findOne({ id });

    let response = await user.updateOne(req.body);

    return res.json({
      id,
      score,
    });
  }
}