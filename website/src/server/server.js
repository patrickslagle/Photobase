require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;

const mysql = require('mysql');
var mysqlDB = mysql.createConnection({
  host     : '*',
  user     : 'root',
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  socketPath: process.env.SOCKETPATH,
  connectTimeout: 60000
});
//test connection, will properly handle the route through app.get or some other route:
mysqlDB.connect();
//console.log('env', process.env.PASSWORD);
mysqlDB.query('SELECT * FROM users;', (err, rows, fields) => {
  console.log('rows', rows);
  if (err) throw err

  console.log('The user is: ', rows[0].username);
})

mysqlDB.end()

import router from ('./routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT);
// module.exports = app;