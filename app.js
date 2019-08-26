// Requirements
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const base64img = require("base64-img");
const imgur = require("imgur");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// routes
app.get("/", function(req, res){
  res.send("sup");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
