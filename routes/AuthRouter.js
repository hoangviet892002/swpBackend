const express = require('express');
const router = express.Router();

const authController = require('../Controllers/AuthController');

//Register
router.post('/register', authController.register);

//Login by email
router.post('/login', authController.login);

//Login by Google OAuth
router.get('/google', authController.googleAuth);

//Google OAuth Callback
router.get('/google/callback', authController.googleAuthCallBack);

//ForgetPassword
router.post('/forgetpassword', authController.forgotPassword);
//Change Pass
router.post('/changepass', authController.changepass);
//Momo
router.post('/momo', authController.momo);

module.exports = router;
