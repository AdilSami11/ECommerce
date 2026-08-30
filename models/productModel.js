const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Store');

const productSchema = mongoose.Schema({
  productName: String,
  picture: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgColor: String,
  panelColor: String,
  txtColor: String,
});

module.exports = mongoose.model('product', productSchema);
