const express = require('express');
const router = express.Router();

const adminController = require('../Controllers/User/AdminController');

//Create doctor
router.post('/createdoctor', adminController.createDoctor);
// Get all doctor
router.get('/getAllDoctor', adminController.getAllDoctor);
// Get all doctor active
router.get('/getAllDoctor', adminController.getAllDoctorActive);
// get doctor 
router.get('/getDoctor', adminController.getDoctor);
//Get all doctor by name
router.get('/getAllDoctorByName', adminController.getAllDoctorByName);


module.exports = router;