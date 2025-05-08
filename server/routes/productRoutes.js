const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.json(products); // Return products as JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;