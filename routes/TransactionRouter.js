const express = require('express');
const router = express.Router();

const transactionController = require('../Controllers/Clinic/TransactionController');
//Create 
router.post('/create', transactionController.create);



module.exports = router;
