
require('dotenv').config();

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const PORT = 3000;

const router = require('./router.js');

//console.log('env', process.env.PASSWORD);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//test connection, will properly handle the route through app.get or some other route:
app.use('/', express.static(path.join(__dirname, './../../dist')));
router(app);

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
  res.send(console.log(err));
});

app.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)});
// module.exports = app;