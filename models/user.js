const mongoose = require("mongoose");
const schema = mongoose.Schema;
const moment = require("moment");

const userSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
    default: "empty-avatar.jpg",
  },
  createdAt: {
    type: Date,
    default: moment().format("DD/MM/YYYY") + ";".moment().format("hh:mm:ss"),
  },
  updatedAt: {
    type: Date,
    default: moment().format("DD/MM/YYYY") + ";".moment().format("hh:mm:ss"),
  },
});

//create user model

mongoose.model("users", userSchema);

//export model

module.exports = mongoose.model("users");
