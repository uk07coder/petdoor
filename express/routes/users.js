//include library

const Router = require("express").Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { check, validationResult, body } = require("express-validator");
const Jwt = require("jsonwebtoken");
const moment = require("moment");
const { signup, signin, requireSignin } = require("../controller/user");
const {
  validateSignupRequest,
  validateSigninRequest,
  isRequestValidated,
} = require("../validators/auth");

const secretWebToken = process.env.TOKEN_KEY;

Router.post("/signin", validateSigninRequest, isRequestValidated, signin);

Router.post("/signup", validateSignupRequest, isRequestValidated, signup);
/*Router.post("/profile", requireSignin, (req, res) => {
  res.status(200).json({
    user: "profile",
  });
});*/
module.exports = Router;
