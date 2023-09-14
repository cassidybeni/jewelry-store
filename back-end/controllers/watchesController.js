const express = require("express");
const watches = express.Router();
const {
  getAllWatches,
  getWatch,
  createWatch,
  deleteWatch,
  updateWatch,
} = require("../queries/watches");

watches.get("/", async (req, res) => {
  const allWatches = await getAllWatches();
  if (allWatches[0]) {
    res.status(200).json(allWatches);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

watches.get("/:id", async (req, res) => {
  const { id } = req.params;
  const watch = await getWatch(id);
  if (watch) {
    res.json(watch);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

watches.post("/", async (req, res) => {
  try {
    const watch = await createWatch(req.body);
    res.json(watch);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

watches.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedWatch = await deleteWatch(id);
  if (deletedWatch.id) {
    res.json(deletedWatch);
  } else {
    res.status(404).json("Watch does not exist.");
  }
});

watches.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedWatch = await updateWatch(id, req.body);
  res.status(200).json(updatedWatch);
});

module.exports = watches;
