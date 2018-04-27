const mongoose = require('mongoose');

const { Schema } = mongoose;

const address = mongoose.Schema({
  line1: String,
  city: String,
  postal_code: String,
}, { _id: false })

const userSchema = Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, select: false },
  fullname: { type: String, require: true },
  shipping: address,
});

module.exports = mongoose.model('User', userSchema);
