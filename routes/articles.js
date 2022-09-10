const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("In articles");
});

router.get("/edit", (req, res) => {
  res.send("article 속 edit 입니다");
});
module.exports = router;
