const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  image: String,
  score: Number,
  scoreDescription: String,
  tagName: String,
},{
  toJSON: {
    virtuals: true,
  }
});

UserSchema.virtual('image_url').get(function() {
  return `http://localhost:3333/files/${this.image}`
})

module.exports = mongoose.model('User', UserSchema);