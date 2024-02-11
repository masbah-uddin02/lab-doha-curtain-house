const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  status: {
    type: String,
    default: 'pending', 
  },
});

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = AppointmentModel;
