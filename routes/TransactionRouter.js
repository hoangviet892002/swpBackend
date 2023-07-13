const express = require('express');
const router = express.Router();

const transactionController = require('../Controllers/Clinic/TransactionController');
//get 
router.get('/getall', transactionController.getall);



module.exports = router;
