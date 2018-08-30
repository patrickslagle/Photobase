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
//   app.post('/image-upload',  
//   multer.single('image'),
//   imgUpload.uploadToGcs, 
//   function(request, response, next) {
//     const data = request.body;

//     console.log('request.file', request.file.cloudStoragePublicUrl)
//     if (request.file && request.file.cloudStoragePublicUrl) {
//       data.imageUrl = request.file.cloudStoragePublicUrl;
//     }
//   response.send(data)
// });
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
