const express = require('express');
const router = express.Router();

const { getPurchases, getPurchase, createPurchase, updatePurchase, deletePurchase } = require('../db');

// GET - /api/purchases - get all purchases


// GET - /api/purchases/:id - get a single purchase


// POST - /api/purchases - create a new purchase


// PATCH - /api/purchases/:id - update a purchase


// DELETE - /api/purchases/:id - delete a purchase



module.exports = router;