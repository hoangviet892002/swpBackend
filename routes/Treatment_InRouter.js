const express = require('express');
const router = express.Router();
const treatmentincontroller = require('../Controllers/Clinic/Treatment_inController');


router.get('/getAllByTreatmentProfile', treatmentincontroller.getTreatmentInDetailsByidTreatmentProfile);

router.get('/details', treatmentincontroller.getTreatmentInDetails);

router.post('/update', treatmentincontroller.updateTreatmentIn);

router.post('/create', treatmentincontroller.createTreatmentIn);
module.exports = router;