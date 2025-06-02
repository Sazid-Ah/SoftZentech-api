// const app = require('./app');
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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
