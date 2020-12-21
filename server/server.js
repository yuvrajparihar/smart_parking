const express = require("express")
const bodyParser= require("body-parser")
const mysql = require('mysql');



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678"
  });
  
  con.connect(function(err) {
    if (err) throw err
    else{
        console.log("Connected!");
    }
   
  });

app.get("/",function(req, res){
    res.send("hello");
})

app.listen(5000,function(req, res){
    console.log("server is listening on 5000")
})