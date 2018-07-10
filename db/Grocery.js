const connection = require('./index');

// write a function that returns all the groceries
const getAll = function (cb) {
  connection.query('SELECT * FROM groceries', (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, data);
  });
};

// write a function that adds an item to the list
const add = function (name, quantity, cb) {
  const query = 'INSERT INTO groceries(name, quantity) VALUES(?, ?)';
  connection.query(query, [name, quantity], cb);
};


module.exports = {
  getAll,
  add,
};
