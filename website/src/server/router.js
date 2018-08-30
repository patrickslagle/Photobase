const path = require('path');
const db = require('./db.js');

module.exports = (app) => {
  app.get('/images', (req, res, next) => {
    db.query('SELECT uri FROM images;')
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      })
  });
  app.get('/users', (req, res, next) => {
    db.query('SELECT username FROM users;')
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      })
  });
}

// mySQL stuff

// const mysql = require('mysql');
// const mysqlDB = mysql.createConnection({
//   host     : '*',
//   user     : 'root',
//   password : process.env.PASSWORD,
//   database : process.env.DATABASE,
//   socketPath: process.env.SOCKETPATH,
//   connectTimeout: 10000
// });
// mysqlDB.connect();
// module.exports = (app) => {
//   console.log('im in router????');
//   //console.log(mysqlDB);
//   app.get('/users', (req, res, next) => {
//     console.log('im in router!');
//     console.log(mysqlDB);
//     mysqlDB.query('SELECT * FROM users;', (err, rows, fields) => {
//       if (err) throw err;
//       console.log('rows', rows[0].username);
//       // console.log('The user is: ', rows[0].username);
//       res.send(rows);
//     })
//     mysqlDB.end()
//   });
// };
