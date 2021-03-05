const express = require("express");
const Ad = require("../models/Ad");
const router = express.Router();
const fileUpload = require("express-fileUpload");
const Path = require("path");

router.post("/create", (req, res) => {
  console.log(req.body);
  console.log(req.files);
  let pp = req.files.petPhoto;

  const adobj = {
    petType: req.body.petType,
    city: req.body.city,
    breed: req.body.breed,
    age: req.body.age,
    petPhoto: pp.name,
  };

  pp.mv(__dirname + "/img/" + pp.name, function (err) {
    if (err) {
      return res.status(400).json({ status: "Image not uploaded" });
    } else {
      //return res.status(200).json({ status: "file uploaded successfully" });
    }
  });

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
