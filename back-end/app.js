const cors = require("cors");
const express = require("express");
const braceletsController = require("./controllers/braceletsController");
const earringsController = require("./controllers/earringsController");
const ringsController = require("./controllers/ringsController");
const necklacesController = require("./controllers/necklacesController");
const watchesController = require("./controllers/watchesController");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("💎 Welcome to Hell's Kitchen Ice 💎");
});

app.use("/bracelets", braceletsController);
app.use("/earrings", earringsController);
app.use("/rings", ringsController);
app.use("/necklaces", necklacesController);
app.use("/watches", watchesController);

app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});

module.exports = app;
