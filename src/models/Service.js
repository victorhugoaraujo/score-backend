const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  value: Number,
  finalValue: Number,
  tagName: String,
});

module.exports = mongoose.model('Service', ServiceSchema);
