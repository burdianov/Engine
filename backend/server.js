const express = require('express');

// configure dotenv for environment variables access
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.disable('x-powered-by');

// connect to the database
const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 5000;

// init middleware
// allow using the data in req.body by applying this middleware
app.use(express.json({ extended: false }));

// import routes
app.use('/api/user', require('./routes/auth'));
app.use('/api/user', require('./routes/info'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
