const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  res.send({ message: 'Hello from server!' });
});

router.post('/login', async (req, res) => {
  res.send({});
});

router.get('/habit:id', async (req, res) => {
  res.send({});
});

router.post('/habit:id', async (req, res) => {
  res.send({});
});

router.patch('/habit:id', async (req, res) => {
  res.send({});
});

router.delete('/habit:id', async (req, res) => {
  res.send({});
});

router.get('/habits', async (req, res) => {
  res.send({});
});

module.exports = router;
