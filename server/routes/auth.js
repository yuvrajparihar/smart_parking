const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mysqlConnnection = require("../connection");
const router = express.Router();

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "23h" });
  }
  
  function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
  
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
      if (err) return res.send({ response: 403 });
  
      req.user = user;
      next();
    });
  }

router.post("/user/login", function (req, res) {
  mysqlConnnection.query(
    "SELECT ? FROM hotel WHERE HOTEL_ID=?",
    ["HOTEL_NAME", 1],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});
router.post("/user/register", function (req, res) {
  mysqlConnnection.query(
    "SELECT ? FROM hotel WHERE HOTEL_ID=?",
    ["HOTEL_NAME", 1],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});
router.post("/host/login", function (req, res) {
  mysqlConnnection.query(
    "SELECT ? FROM hotel WHERE HOTEL_ID=?",
    ["HOTEL_NAME", 1],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});
router.post("/host/register", function (req, res) {
  mysqlConnnection.query(
    "SELECT ? FROM hotel WHERE HOTEL_ID=?",
    ["HOTEL_NAME", 1],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

module.exports = router;
