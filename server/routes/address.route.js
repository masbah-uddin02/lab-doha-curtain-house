const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address.controller');

// Get all addresses with pagination
router.get('/', addressController.getAddresses);

// Get a specific address by ID
router.get('/:id', addressController.getAddressById);

// Create a new address
router.post('/', addressController.createAddress);

// Update an existing address
router.patch('/:id', addressController.updateAddress);

// Delete an address
router.delete('/:id', addressController.deleteAddress);

module.exports = router;
