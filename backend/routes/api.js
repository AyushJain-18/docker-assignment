// routes/api.js

const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const dummyData = require('../db');

// GET all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET item by name
router.get('/items/:name', async (req, res) => {
  try {
    const item = await Item.findOne({ name: req.params.name });
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET item by description
router.get('/items/description/:description', async (req, res) => {
  try {
    const item = await Item.findOne({ description: req.params.description });
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET items by quantity greater than specified value
router.get('/items/quantity/:quantity', async (req, res) => {
  try {
    const items = await Item.find({ quantity: { $gt: req.params.quantity } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add all items.
router.get('/intialize', async () => {
  try {
    let items = await Item.insertMany(dummyData);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
