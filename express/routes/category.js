const express = require("express");
const Category = require("../models/category");
const slugify = require("slugify");
const router = express.Router();

router.post("/create", (req, res) => {
  const categoryobj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    categoryobj.parentId = req.body.parentId;
  }
  const cat = new Category(categoryobj);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) {
      return res.status(400).json({ category });
    }
  });
});
module.exports = router;
