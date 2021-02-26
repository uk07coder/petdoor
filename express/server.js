require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const database = require("./database");
const fileUpload = require("express-fileUpload");
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

//route
/*
app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Petstreet REST API homepage",
  });
});
*/

//start server

app.listen(port, () => {
  console.log("server running at port " + port);
});
