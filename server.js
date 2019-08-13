const express = require('express');
const path = require('path');

// configure dotenv for environment variables access
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.disable('x-powered-by');

// connect to the database
const connectDB = require('./utils/db');
connectDB();

const PORT = process.env.PORT || 5000;

// init middleware
// allow using the data in req.body by applying this middleware
app.use(express.json({ extended: false }));

// import routes
app.use('/api/user', require('./routes/user/auth'));
app.use('/api/user', require('./routes/user/profile'));
app.use('/api/user', require('./routes/user/dictionary'));

app.use('/api/admin', require('./routes/admin/dictionary'));

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
