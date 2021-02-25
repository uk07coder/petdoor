const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    petType: {
      type: String,
      required: true,
      trim: true,
    },
    breed: {
      type: String,
      trim: true,
    },
    age: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    petPhoto: {
      type: String,
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ad", adSchema);
