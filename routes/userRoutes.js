const express = require('express');
const router = express.Router();
// const UserController = require('./controllers/userController');

router.post('/users', UserController.createUser());

// router.get('/user', UserController.getUser());

// router.get('/user', UserController.getUser());

// router.get('/user', UserController.getUser());

