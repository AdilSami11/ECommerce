const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Store');

const ownerSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 4,
    trim: true,
  },
  picture: String,
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin: String,
});

module.exports = mongoose.model('owner', ownerSchema);
