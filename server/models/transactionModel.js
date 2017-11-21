const mongoose = require('mongoose').connect('mongodb://localhost/ecommerce');
const Schema = mongoose.Schema

let transactionSchema = mongoose.Schema({
  userID: {
    type: Schema.type.ObjectId,
    ref: 'User'
  }
  transactionDate: {
    type: Date,
    default: new Date()
  }
  items: [
    itemID: Schema.type.ObjectId,
    ref: 'Item'
    amount: Number,
    subtotal: Number
  ]
  stock: Number,
  price: Number,
  description: String,
})

let transactionModel = mongoose.model('transaction', transactionSchema)

module.exports = transactionModel;