const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');
const ServiceController = require('./controllers/ServiceController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/users', UserController.index);
routes.post('/users', upload.single('image'), UserController.store);
routes.put('/users/', UserController.update);

routes.get('/services', ServiceController.index);
routes.post('/services', upload.single('image'), ServiceController.store);



module.exports = routes;