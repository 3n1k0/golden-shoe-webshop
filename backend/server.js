require('dotenv').config();
const express = require("express");
const connectDB = require('../backend/config/db');

connectDB();

const app = express();

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))