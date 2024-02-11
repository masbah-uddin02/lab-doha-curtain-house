const mongoose = require('mongoose');

const addressSchema  = new mongoose.Schema({
    address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  address3: {
    type: String,
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  twitter: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

const AddressModel = mongoose.model('Address', addressSchema );

module.exports = AddressModel;
