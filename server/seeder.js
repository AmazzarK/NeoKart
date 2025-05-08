const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel');
const products = require('./data/products');

dotenv.config();

const connectDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

const importData = async () => {
  const mongoUri = process.argv[2] || process.env.MONGO_URI;
  if (!mongoUri) {
    console.error('Mongo URI is missing.');
    process.exit(1);
  }

  await connectDB(mongoUri);

  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Seeding Error:', error);
    process.exit(1);
  }
};

importData();
