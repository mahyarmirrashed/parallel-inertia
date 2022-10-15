const mongoose = require('mongoose');

const DAYS_IN_WEEK = 7;

const schema = mongoose.Schema({
  username: { type: String, required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  daysOfWeek: {
    type: [Boolean],
    required: true,
    validate: [
      (arr) => arr.length == DAYS_IN_WEEK,
      'Does not match number of days in week.',
    ],
  },
  loggedDays: [{ type: Date }],
});

module.exports = mongoose.model('Habit', schema);
