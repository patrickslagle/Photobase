const path = require('path');
const mysql = require('mysql');
const mysqlDB = mysql.createConnection({
  host     : '*',
  user     : 'root',
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  socketPath: process.env.SOCKETPATH,
  connectTimeout: 10000
});
mysqlDB.connect();
module.exports = (app) => {
  //console.log(mysqlDB);
  app.get('/pictures', (req, res, next) => {
    console.log('Retrieving from database...');
    mysqlDB.query('SELECT uri FROM pictures;', (err, rows, fields) => {
      if (err) throw err;
      // console.log('The user is: ', rows[0].username);
      res.send(rows);
    })
    mysqlDB.end()
  });
};
