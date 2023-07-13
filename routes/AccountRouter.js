const express = require('express');
const router = express.Router();

const customerController = require('../Controllers/User/CustomerController');

const doctorController = require('../Controllers/User/DoctorController');

router.get('/customer/index', customerController.index);

router.get('/customer/details', customerController.detail);

router.post('/customer/update', customerController.update);

router.post('/customer/create', customerController.create);

router.post('/customer/addAmount', customerController.addAmount);

router.post('/customer/subtractAmount', customerController.subtractAmount);


router.delete('/customer/delete', customerController.delete);

router.get('/doctor/index', doctorController.index);

router.get('/doctor/alllist', doctorController.getAllDoctor);

router.get('/doctor/details', doctorController.detail);

router.post('/doctor/update', doctorController.update);

router.post('/doctor/status', doctorController.status);

router.get('/doctor/getAllDoctorByName', doctorController.getAllDoctorByName);



router.delete('/doctor/delete', doctorController.delete);

module.exports = router;
