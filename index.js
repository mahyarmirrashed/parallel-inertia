const express = require('express');
const cookieParser = require('cookie-parser');

// set up backend listening port
const PORT = process.env.PORT || 4000;

// initialize express.js backend application
const app = express();

// set up cookie parsing
app.use(cookieParser());

app.get('/', (req, res) => {
  console.log(req.cookies);
  res.cookie('Session-ID', 'fff5ec44-7589-442d-9346-6dd99f9b90a6');
  res.send({ message: 'Hello from server!' });
});

// listen for incoming requests
app.listen(PORT, () => {
  console.log(`Application is running at http://localhost:${PORT}`);
});
