const express = require('express');
const router = express.Router();

const roomController = require('../Controllers/Clinic/RoomController');

//Create room
router.post('/create', roomController.createRoom);

//Read room by id
router.get('/details', roomController.getRoomById);

//Read all Room
router.get('/schedule', roomController.getAllRooms);

//Update room
router.put('/updateStatus', roomController.updateRoom);

//Delete room 
router.delete('/delete', roomController.deleteRoom);

module.exports = router;