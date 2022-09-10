const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new");
});

// new.ejs form에서 날린 action
router.post("/", (req, res) => {});

module.exports = router;
