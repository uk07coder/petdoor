//include library

const Router = require("express").Router();
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const Jwt = require("jsonwebtoken");
const moment = require("moment");

const user = require("../models/user");
const secretWebToken = process.env.TOKEN_KEY;

//middlewear setup

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));

//default route
//access:public
//url:http://localhost:3000/user
Router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "user default route",
  });
});

module.exports = Router;