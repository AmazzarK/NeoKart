// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); 
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());  // Allows cross-origin requests
app.use(express.json()); // Parses incoming requests as JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Set up product routes
app.use('/products', productRoutes);

// Sample API route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
