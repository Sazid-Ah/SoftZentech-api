const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/forms', formRoutes);
app.use(errorHandler);

module.exports = app;
