const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  image: String,
  score: Number,
});

module.exports = mongoose.model('User', UserSchema);