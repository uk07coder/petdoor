const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    petType: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      trim: true,
    },
    age: {
      type: String,
      required: true,
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ad", adSchema);
