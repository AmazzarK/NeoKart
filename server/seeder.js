const mongoose = require('mongoose');
const Product = require('./models/productModel'); // Assuming you have a product model
const connectDB = require('./config/db');

const seedProducts = async () => {
  await connectDB();

  const products = [
    { name: "Product 1", description: "A cool product", price: 100, imageUrl: "https://via.placeholder.com/150" },
    { name: "Product 2", description: "Another awesome product", price: 150, imageUrl: "https://via.placeholder.com/150" },
    { name: "Product 3", description: "Yet another product", price: 200, imageUrl: "https://via.placeholder.com/150" }
  ];

  try {
    await Product.deleteMany(); // Optional: clear the collection before seeding
    await Product.insertMany(products);
    console.log("Products seeded successfully!");
  } catch (error) {
    console.error("Error seeding products:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedProducts();
