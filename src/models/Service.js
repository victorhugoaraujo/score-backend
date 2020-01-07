const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  value: String,
  finalValue: String,
  action: String,
  tagName: String,
},{
  toJSON: {
    virtuals: true,
  }
});

ServiceSchema.virtual('image_url').get(function() {
  return `http://localhost:3333/files/${this.image}`
})

module.exports = mongoose.model('Service', ServiceSchema);
