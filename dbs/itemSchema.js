const mongoose = require('mongoose');

const { Schema } = mongoose;

const variant = mongoose.Schema({
  type: String,
  price: Number,
})

const itemSchema = Schema({
  itemname: String,
  categories: [String],
  variants: [variant],
});

module.exports = mongoose.model('Item', itemSchema);
