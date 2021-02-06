const express = require("express");
const Ad = require("../models/Ad");
const slugify = require("slugify");
const router = express.Router();

router.post("/create", (req, res) => {
  const adobj = {
    petType: req.body.petType,
    city: req.body.city,
    breed: req.body.breed,
    age: req.body.age,
  };

  if (req.body.parentId) {
    adobj.parentId = req.body.parentId;
  }
  const adver = new Ad(adobj);
  adver.save((error, ad) => {
    if (error) return res.status(400).json({ error });
    if (ad) {
      return res.status(200).json({ ad });
    }
  });
});
module.exports = router;
