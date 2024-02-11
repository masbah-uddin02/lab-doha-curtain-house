const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointments.controller');

// GET all appointments with pagination
router.get('/getAppointments', appointmentController.getAppointments);

// GET a specific appointment by ID
router.get('/getAppointmentsById/:id', appointmentController.getAppointmentById);

// POST a new appointment
router.post('/addAppointments', appointmentController.createAppointment);

// UPDATE an existing appointment
router.patch('/updateAppointments/:id', appointmentController.updateAppointment);

// DELETE an appointment
router.delete('/deleteAppointments/:id', appointmentController.deleteAppointment);

module.exports = router;
