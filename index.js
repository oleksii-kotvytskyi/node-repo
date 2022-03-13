const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3000;

express()
  .get("/", (req, res) => res.render("index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));