const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = Schema({
  itemname: String,
  categories: [String],
  price: Number,
});

module.exports = mongoose.model('Item', itemSchema);
