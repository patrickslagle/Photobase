const path = require('path');
const db = require('./db.js');

// const imgUpload = require('./imgUpload');
// const Multer = require('multer');
// const multer = Multer({
//   storage: Multer.MemoryStorage,
//   limits: {
//     fileSize: 5 * 1024 * 1024 // no larger than 5mb
//   }
// });

module.exports = (app) => {
  app.get('/messages', (req, res, next) => {
    db.query('SELECT messages.message, message.created_at, users.username FROM messages INNER JOIN users ON messages.user_id = users_id;')
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
  app.post('/messages', (req, res, next) => {
    db.query(`INSERT INTO messages (user_id, message, created_at) VALUES ((SELECT _id FROM users WHERE username = 'andrew'), '${req.body.message}', '${req.body.created_at}')`)
      .then((data) => {
        console.log(`message posted`);
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
