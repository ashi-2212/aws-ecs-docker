const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Ram Tilak Yadav Application which is deployed on ECS through FARGET using AWS Codepipeline!!!!!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
