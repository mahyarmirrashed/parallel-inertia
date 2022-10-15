const { v4: uuidv4 } = require('uuid');

const Cookie = require('./models/Cookie');
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

const userExists = async (username) =>
  User.findOne({ username: username }).exec() !== null;

const userIsValid = async (username, password) =>
  User.findOne({ username: username, password: password }).exec() !== null;

module.exports = {
  createCookie,
  createUser,
  userExists,
  userIsValid,
};
