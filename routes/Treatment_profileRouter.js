const express = require('express');
const router = express.Router();

const treatmentProfile_Controller = require('../Controllers/Clinic/Treatment_profileController');

//Create treatmentProfile
router.post('/create', treatmentProfile_Controller.createTreatmentProfile);

//Read treatmentProfile by ID
router.get('/details', treatmentProfile_Controller.getTreatmentProfileById);

//Read treatmentProfile by CustomerID
router.get('/schedule', treatmentProfile_Controller.getAllTreatmentProfilesByCustomer);

//Read all treatmentProfile
router.get('/available', treatmentProfile_Controller.getAllTreatmentProfiles);

//Update treatmentProfile 
router.put('/updateStatus', treatmentProfile_Controller.updateTreatmentProfile);

//Delete treatmentProfile 
router.delete('/delete', treatmentProfile_Controller.deleteTreatmentProfile);

module.exports = router;
