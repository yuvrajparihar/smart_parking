const mysql = require('mysql');



var mysqlConnnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database:"parkingdb",
    multipleStatements: true
  });
  
  mysqlConnnection.connect(function(err) {
    if (err) throw err
    else{
        console.log("Connected!");
    }
   
  });


  module.exports = mysqlConnnection;