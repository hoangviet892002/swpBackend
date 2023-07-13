const express = require('express');
const router = express.Router();

const AmountController = require('../Controllers/Clinic/amountController');
//get 
router.get('/get', AmountController.get);
//update 
router.post('/update', AmountController.update);



module.exports = router;
