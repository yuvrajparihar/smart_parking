const express = require("express");
const mysqlConnnection = require("../connection");
const router = express.Router();

// router.get("/", function (req, res) {
//   mysqlConnnection.query("SELECT * FROM booking", function (err, rows, field) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(rows);
//       res.send(rows);
//     }
//   });
// });

router.post("/bookings", function (req, res) {
  const userId = req.body.email;
  mysqlConnnection.query(
    "SELECT * FROM booking WHERE user_id=?",
    [userId],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        if(rows.length>0){
          res.send(rows);
        }
        else{
      
          res.send("no bookings");
        
        }
      
       
      }
    }
  );

});

router.post("/parkingDetails", function (req, res) {
  mysqlConnnection.query(
    "SELECT * FROM parking_details WHERE parking_id=?",
    [req.body.park_id],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});
router.get("/parkings", function (req, res) {
  mysqlConnnection.query(
    "SELECT parking_id,p_name,latitude,longitude,p_description,fare_car,fare_bike,address,spots,verified,owner_id,bike_spots FROM parking_details",
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
