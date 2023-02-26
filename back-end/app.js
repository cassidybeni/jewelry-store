const cors = require("cors");
const express = require("express");
const ringsController = require("./controllers/ringsController");
const braceletsController = require("./controllers/braceletsController");
const necklacesController = require("./controllers/necklacesController");
const watchesController = require("./controllers/watchesController");
const earringsController = require("./controllers/earringsController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("💎 Welcome to the Jewelry Store App 💎");
});

app.use("/rings", ringsController);
app.use("/bracelets", braceletsController);
app.use("/earrings", earringsController);
app.use("/necklaces", necklacesController);
app.use("/watches", watchesController);

app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});

const db = require("./db/dbConfig.js");

module.exports = app;
