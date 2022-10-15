const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

// configure environment variables
dotenv.config();

// set up backend listening port
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

// initialize express.js backend application
const app = express();

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    // attach all api routes
    app.use('/api', routes);

    // listen for incoming requests
    app.listen(PORT, () => {
      console.log(`Application is running at http://localhost:${PORT}`);
    });
  })
  .catch(console.error);
