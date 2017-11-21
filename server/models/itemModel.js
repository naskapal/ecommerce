const mongoose = require('mongoose').connect('mongodb://localhost/ecommerce');

let itemSchema = mongoose.Schema({
  name: String,
  image: String,
  stock: Number,
  price: Number,
  description: String,
})

let itemModel = mongoose.model('Item', itemSchema)

module.exports = itemModel;