const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

//view engine 세팅하기
app.set("view engine", "ejs");

app.use("/articles", articleRouter);

//route 설정
app.get("/", (req, res) => {
  res.render("index", { text: "hello" });
});

app.listen(3000);
