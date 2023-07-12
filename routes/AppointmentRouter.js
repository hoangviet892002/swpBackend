const express = require('express');
const router = express.Router();

const appointmentController = require('../Controllers/Clinic/AppointmentController');

//Create appointment
router.post('/create', appointmentController.createAppointment);

//Read appointment by custormer
router.get('/appointmentcustomer', appointmentController.appointmentcustomer);

//Read all appointment
router.get('/all', appointmentController.getAllAppointments)

//Read all appointment by doctor
router.get('/appointmentdoctor', appointmentController.appointmentdoctor)

//Read appointment by ID
router.get('/details', appointmentController.getAppointmentDetails);

//Update appointment 
router.post('/update', appointmentController.updateAppointment);

//Delete appointment
router.delete('/delete', appointmentController.deleteAppointment);

module.exports = router;