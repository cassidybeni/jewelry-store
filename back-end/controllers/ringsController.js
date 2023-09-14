const express = require("express");
const rings = express.Router();
const {
  getAllRings,
  getRing,
  createRing,
  deleteRing,
  updateRing,
} = require("../queries/rings");

rings.get("/", async (req, res) => {
  const allRings = await getAllRings();
  if (allRings[0]) {
    res.status(200).json(allRings);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

rings.get("/:id", async (req, res) => {
  const { id } = req.params;
  const ring = await getRing(id);
  if (ring) {
    res.json(ring);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

rings.post("/", async (req, res) => {
  try {
    const ring = await createRing(req.body);
    res.json(ring);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

rings.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRing = await deleteRing(id);
  if (deletedRing.id) {
    res.json(deletedRing);
  } else {
    res.status(404).json("Ring does not exist.");
  }
});

rings.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedRing = await updateRing(id, req.body);
  res.status(200).json(updatedRing);
});

module.exports = rings;
