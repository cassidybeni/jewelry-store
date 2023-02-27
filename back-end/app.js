const cors = require("cors");
const express = require("express");
const braceletsController = require("./controllers/braceletsController");
const ringsController = require("./controllers/ringsController");
const necklacesController = require("./controllers/necklacesController");
const watchesController = require("./controllers/watchesController");
const earringsController = require("./controllers/earringsController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("💎 Welcome to the Jewelry Store App 💎");
});

app.use("/bracelets", braceletsController);
// app.use("/rings", ringsController);
// app.use("/earrings", earringsController);
// app.use("/necklaces", necklacesController);
// app.use("/watches", watchesController);

app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});

module.exports = app;
