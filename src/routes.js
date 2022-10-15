const express = requrie('express');
const router = express.Router();

router.post('/', async (req, res) => {
  res.send({ message: 'Hello from server!' });
});

router.post('/login', async (req, res) => {
  res.send({});
});

router.post('/habit', async (req, res) => {
  res.send({});
});

router.post('/log', async (req, res) => {
  res.send({});
});

module.exports = router;
