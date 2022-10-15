const mongoose = require('mongoose');

const schema = mongoose.Schema({
  cookie: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Cookie', schema);
