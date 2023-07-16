const express = require('express');
const router = express.Router();
const treatmentincontroller = require('../Controllers/Clinic/Treatment_inController');


router.get('/getAllByTreatmentProfile', treatmentincontroller.getTreatmentInDetailsByidTreatmentProfile);

router.get('/details', treatmentincontroller.getTreatmentInDetails);

router.post('/update', treatmentincontroller.updateTreatmentIn);

router.post('/create', treatmentincontroller.createTreatmentIn);
module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     TreatmentProfile:
 *       type: object
 *       required:
 *         - id
 *         - createdAt
 *         - updatedAt
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the TreatmentProfile
 *         doctorID:
 *           type: integer
 *           description: The Doctor ID
 *         idTreatmentProfile:
 *           type: integer
 *           description: The description  
 *         createdAt:
 *           type: string
 *           format: Date
 *           description: The date created this TreatmentProfile
 *         updatedAt:
 *           type: string
 *           format: Date
 *           description: The lastest date updated this TreatmentProfile
 */