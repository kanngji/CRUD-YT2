const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

//view engine 세팅하기
app.set("view engine", "ejs");

app.use("/articles", articleRouter);

//route 설정
app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "Test Article2",
      createdAt: new Date(),
      description: "Test description2",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(3000);
