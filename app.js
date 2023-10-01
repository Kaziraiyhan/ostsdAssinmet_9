const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const expressSanitizer = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

dotenv.config();

const apiRoutes = require('./src/Routes/api');
const { connectToDatabase, createCollection, removeCollection, insertDocument, deleteDocument } = require('./Query');
const router = require('./src/Routes/api')
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSanitizer());
app.use(helmet());
app.use(hpp());
app.use(cors());



app.use(router)
app.use('/api', apiRoutes);

// More app configuration and routes can go here

// Handle undefined routes (404 Not Found)
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});



module.exports = app;
