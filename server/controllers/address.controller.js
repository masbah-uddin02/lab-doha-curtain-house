const AddressModel = require('../models/address.model');

// Get a paginated list of addresses
const getAddresses = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const addresses = await AddressModel.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await AddressModel.countDocuments();

    res.json({
      addresses,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific address by ID
const getAddressById = async (req, res) => {
  try {
    const address = await AddressModel.findById(req.params.id);
    if (address == null) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new address
const createAddress = async (req, res) => {
  const address = new AddressModel(req.body);

  try {
    const newAddress = await address.save();
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing address
const updateAddress = async (req, res) => {
  try {
    const updatedAddress = await AddressModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (updatedAddress == null) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.json(updatedAddress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an address
const deleteAddress = async (req, res) => {
  try {
    const deletedAddress = await AddressModel.findByIdAndRemove(req.params.id);

    if (deletedAddress == null) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress
};
