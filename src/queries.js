const generateCookie = (username, password) => {
  // find username/password combination
  // if username does not exist, then create new user and set password, otherwise
  // if username/password combination matches, create new cookie and return it
  // when creating cookie, add to cookie collection and map to username
  // if username/password combination does not exist, return null
};

const getUsernameFromCookie = (cookie) => {
  // search for cookie inside cookies collection
  // if cookie is not found, return null (403 forbidden)
  // if cookie is found, return username
  // (optional), delete expired cookies
};

const getHabitData = (cookie) => {
  // call getUsernameFromCookie()
  // get list of habits for username
  // trim dates by sorted, and return most recent five
};

const logHabit = (cookie, habitId, date, status) => {
  // call getUsernameFromCookie()
  // look up username/habitId combination
  // if habitId does not exist on username, return false (400 bad request)
  // if habitId does exist, add/remove date on habitId based on status (200 OK)
};
