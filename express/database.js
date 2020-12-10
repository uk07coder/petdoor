//include library
const mongoose = require("mongoose");
const assert = require("assert");

// Establish database connection

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  (error, link) => {
    //check database conncetion error
    assert.strictEqual(error, null, "Database connection fail...");

    //database connection success
    console.log("Database connection Established");
  }
);
