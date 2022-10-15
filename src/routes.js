const express = require('express');
const router = express.Router();

const codes = require('./codes');
const helpers = require('./helpers');
const queries = require('./queries');

router.post('/login', async (_, res) => {
  if (await queries.userExists()) {
    if (await queries.userIsValid()) {
      const cookie = await queries.createCookie();

      helpers.updateResponseWithCookie(cookie, res, codes.OK);
    } else {
      res.status(codes.UNAUTHORIZED);
    }
  } else {
    try {
      await queries.createUser();

      const cookie = await queries.createCookie();

      helpers.updateResponseWithCookie(cookie, res, codes.CREATED);
    } catch {
      res.status(codes.BAD_REQUEST);
    }
  }

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
