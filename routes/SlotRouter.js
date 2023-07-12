const express = require('express');
const router = express.Router();

const slotController = require('../Controllers/Clinic/SlotController');

//Create slot for doctor
router.post('/create', slotController.createSlotForDoctor);

//read all slot by doctor
router.get('/getSlotbyDoctor', slotController.getAllSlotsByDoctor);

//get all doctor by slot 
router.post('/getDoctorByTime', slotController.getAllDoctorBySlot);
//Read slot by id
router.get('/details', slotController.getSlotById);

//Read all slot of doctor by doctor ID
router.get('/schedule', slotController.getAllSlotsByDoctor);

//Read available slot of doctor by doctor ID 
router.get('/available', slotController.getAvailableSlotsByDoctor);

//Update status 
router.put('/updateStatus', slotController.updateSlotStatus);

//Update 
router.post('/updateStatus', slotController.updateSlot);

//Delete slot 
router.delete('/delete', slotController.deleteSlot);

module.exports = router;
