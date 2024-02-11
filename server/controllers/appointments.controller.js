const AppointmentModel = require('../models/appointments.model');

// GET all appointments with pagination
const getAppointments = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const appointments = await AppointmentModel.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const totalAppointments = await AppointmentModel.countDocuments();

    res.json({
      data: appointments,
      page,
      totalItems: totalAppointments,
      totalPages: Math.ceil(totalAppointments / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET a specific appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await AppointmentModel.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new appointment
const createAppointment = async (req, res) => {
  const appointment = new AppointmentModel(req.body);
  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE an existing appointment
const updateAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE an appointment
const deleteAppointment = async (req, res) => {
  try {
    await AppointmentModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Appointment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
