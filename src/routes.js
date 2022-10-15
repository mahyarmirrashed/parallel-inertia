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

router.post('/habit', async (req, res) => {
  let body = {};
  let cookie = helpers.extractCookie(req);

  if (await queries.cookieExists(cookie)) {
    const username = await queries.getUser(cookie);

    try {
      const habit = await queries.createHabit(
        username,
        req.body.name,
        req.body.description,
        req.body.daysOfWeek,
      );

      body = { habitId: habit.uuid };

      res.status(codes.CREATED);
    } catch {
      res.status(codes.BAD_REQUEST);
    }
  } else {
    res.status(codes.UNAUTHORIZED);
  }

  res.send(body);
});

//router.patch('/habit:uuid', async (req, res) => {
//  res.send({});
//});

//router.delete('/habit:uuid', async (req, res) => {
//  res.send({});
//});

router.get('/habits', async (req, res) => {
  let body = {};
  let cookie = helpers.extractCookie(req);

  if (await queries.cookieExists(cookie)) {
    const user = (await queries.getUser(cookie))['username'];

    body = await queries.getHabits();

    res.status(codes.OK);
  } else {
    res.status(codes.UNAUTHORIZED);
  }

  res.send(body);
});

module.exports = router;
