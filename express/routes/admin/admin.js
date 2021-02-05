//include library
const { check, validationResult, body } = require("express-validator");
const Router = require("express").Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const Jwt = require("jsonwebtoken");
const moment = require("moment");
const {
  signup,
  signin,
  requireSignin,
} = require("../../controller/admin/admin");
const {
  isRequestValidated,
  validateSignupRequest,
} = require("../../validators/auth");

const secretWebToken = process.env.TOKEN_KEY;

Router.post("/signin", signin);

Router.post("/signup", validateSignupRequest, isRequestValidated, signup);

module.exports = Router;
