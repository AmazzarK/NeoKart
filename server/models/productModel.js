const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // your schema here
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
