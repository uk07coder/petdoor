require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const morgan = require("morgan");
const database = require("./database");
const fileUpload = require("express-fileUpload");
const Ad = require("./models/Ad");

const port = process.env.PORT;

//user route
const userRoute = require("./routes/users");
const adminRoute = require("./routes/admin/admin");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const adRoute = require("./routes/ad");

//middleware setup
app.use(fileUpload());
//app.use(express.static("./img/petphoto"));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/ad", adRoute);
app.use(express.static(__dirname + "/routes/img"));

//route
app.get("/", (req, res) => {
  let posts = Ad.find({}, function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});

//start server

app.listen(port, () => {
  console.log("server running at port " + port);
});
