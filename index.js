const cookieParser = require('cookie-parser');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

// set up backend listening port
const PORT = process.env.PORT || 4000;

// initialize express.js backend application
const app = express();

// set up cookie parsing
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req.cookies);
  res.cookie('Session-ID', uuidv4());
  res.send({ message: 'Hello from server!' });
});

// listen for incoming requests
app.listen(PORT, () => {
  console.log(`Application is running at http://localhost:${PORT}`);
});
