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
const cors = require('cors');
// ✅ CORS config
const allowedOrigins = ['http://localhost:80', 'http://softzentech.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
})
app.use('/api/forms', formRoutes);
app.use(errorHandler);



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
