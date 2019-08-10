const express = require('express');

// configure dotenv for environment variables access
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// connect to the database
const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 5000;

// Init Middleware
// allow using the data in req.body by applying this middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
