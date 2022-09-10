const express = require("express");
const app = express();

//view engine 세팅하기
app.set("view engine", "ejs");

//route 설정
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
