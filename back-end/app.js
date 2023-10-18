const cors = require("cors");
const express = require("express");
const braceletsController = require("./controllers/braceletsController");
const earringsController = require("./controllers/earringsController");
const ringsController = require("./controllers/ringsController");
const necklacesController = require("./controllers/necklacesController");
const watchesController = require("./controllers/watchesController");
const queryController = require("./controllers/queryController");
const app = express();
const axios = require("axios");

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

app.get("/chat", async (req, res) => {
  const userQuery = req.query.query;

  if (userQuery.includes("rings")) {
    axios
      .get("https://jewelry-store-of44.onrender.com/rings")
      .then((res) => {
        const rings = res.data;
        res.json({ res: rings });
      })
      .catch((e) => {
        res.json({
          res: "An error occurred while fetching ring data.",
        });
      });
  } else {
    const res = queryController.processQuery(userQuery);
    res.json({ res });
  }
});

app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});

module.exports = app;
