// Requirements
require("dotenv").config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const ImgurStorage = require("@trevorblades/multer-storage-imgur");
const multer = require("multer");

const upload = multer({
  storage: ImgurStorage({
    clientId: process.env.IMGUR_CLIENT_ID
  })
});

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// routes
// "Index Route"
app.get("/", function(req, res){
  res.render("front");
});

// "New route"
app.get("/upload", function(req, res){
  res.render("upload");
});

// "Create route"
app.post("/", upload.single("photo"), function(req, res){
  console.log(req.file);
  console.log(req.body);
  res.write("<p>UPLOADED IMAGE FUCKING SUCCESS</p>");
  res.write("<img src='" + req.file.data.link + "'>");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});


// 3f6e7ff21cc24fc
