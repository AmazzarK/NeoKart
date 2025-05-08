const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Set strictQuery option to avoid deprecation warnings
    mongoose.set('strictQuery', true);  // Set this to true or false as per your requirement

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
