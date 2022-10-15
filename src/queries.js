const { v4: uuidv4 } = require('uuid');

const Cookie = require('./models/Cookie');
const Habit = require('./models/Habit');
const User = require('./models/User');

const createCookie = async (username) => {
  let cookie = uuidv4();

  try {
    Cookie.findOneAndUpdate(
      { username: username },
      { username: username, cookie: cookie },
      { upsert: true },
    );

    return cookie;
  } catch {
    return null;
  }
};

const createUser = async (username, password) =>
  new User({ username: username, password: password }).save();

const cookieExists = async (cookie) =>
  Cookie.findOne({ cookie: cookie }).exec() !== null;

const getHabits = async (username) => Habit.find({ username: username }).exec();

const getUser = async (cookie) => Cookie.findOne({ cookie: cookie }).exec();

const userExists = async (username) =>
  User.findOne({ username: username }).exec() !== null;

const userIsValid = async (username, password) =>
  User.findOne({ username: username, password: password }).exec() !== null;

module.exports = {
  createCookie,
  createUser,
  cookieExists,
  getHabits,
  getUser,
  userExists,
  userIsValid,
};
