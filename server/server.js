const express = require("express")
const bodyParser= require("body-parser")
const user = require("./routes/user")
const auth = require("./routes/auth")
const host = require("./routes/host")



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user",user);
app.use("/auth",auth);
app.use("/host",host);




app.listen(5000,function(req, res){
    console.log("server is listening on 5000")
})