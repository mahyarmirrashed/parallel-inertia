const codes = require('./codes');

const updateResponseWithCookie = (cookie, res, status) => {
  if (cookie === null) {
    res.status(codes.INTERNAL_SERVER_ERROR);
  } else {
    res.cookie('Session-ID', cookie);
    res.status(status);
  }
};

module.exports = {
  updateResponseWithCookie,
};