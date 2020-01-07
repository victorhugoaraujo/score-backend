const Service = require('../models/Service');

module.exports = {
  async index(req, res){
    const { score } = req.query;
    let tagName = [];

    if(score <= 30){
      tagName.push('negociar');

    }
    if(score >= 31 && score <= 60){
      tagName.push('proposta');
    }
    if(score >= 50 && score <= 89){
      tagName.push('rg');
    }
    if(score >= 90){
      tagName.push('rg desconto');
    }

    const services = await Service.find({ tagName });

    return res.json(services);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { title, description, value, finalValue, action, tagName } = req.body;

    let service = await Service.findOne({ title })

    if(!service) {
      service = await Service.create({ title, description, image: filename, value, finalValue, action, tagName });
    }
    return res.json(service);
  }
}
