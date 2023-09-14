const express = require("express");
const earrings = express.Router();
const {
  getAllEarrings,
  getEarring,
  createEarring,
  deleteEarring,
  updateEarring,
} = require("../queries/earrings");

earrings.get("/", async (req, res) => {
  const allEarrings = await getAllEarrings();
  if (allEarrings[0]) {
    res.status(200).json(allEarrings);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

earrings.get("/:id", async (req, res) => {
  const { id } = req.params;
  const earring = await getEarring(id);
  if (earring) {
    res.json(earring);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

earrings.post("/", async (req, res) => {
  try {
    const earring = await createEarring(req.body);
    res.json(earring);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

earrings.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedEarring = await deleteEarring(id);
  if (deletedEarring.id) {
    res.status(200).json(deletedEarring);
  } else {
    res.status(404).json("Earring does not exist.");
  }
});

earrings.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedEarring = await updateEarring(id, req.body);
  res.status(200).json(updatedEarring);
});

module.exports = earrings;
