import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite!");
});

ViteExpress.listen(app, 3001, () =>
  console.log("Server is listening on port 3000..."),
);
