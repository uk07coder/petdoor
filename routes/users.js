//include library

const Router = require("express").Router();
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const { check, validationResult, body } = require("express-validator");
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

//user register route
//url:http://localhost:3000/user/register
Router.post(
  "/register",
  [
    //check empty fields
    check("username").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),

    //email validation
    check("email").isEmail().normalizeEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    //check errors is not empty

    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }
    return res.status(200).json({
      status: true,
      data: req.body,
    });
  }
);

module.exports = Router;
