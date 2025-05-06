const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel'); // Only once
const products = require('./data/products');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
