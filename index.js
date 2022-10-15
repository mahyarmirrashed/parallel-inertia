const express = require('express');

// set up backend listening port
const PORT = process.env.PORT || 4000;

// initialize express.js backend application
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello from server!' });
});

// listen for incoming requests
app.listen(PORT, () => {
  console.log(`Application is running at http://localhost:${PORT}`);
});
