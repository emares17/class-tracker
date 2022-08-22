const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const connectDB = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env'});

// Connect to Database
connectDB();

// Server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));