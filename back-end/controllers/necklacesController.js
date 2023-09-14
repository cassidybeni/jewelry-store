const express = require("express");
const necklaces = express.Router();
const {
  getAllNecklaces,
  getNecklace,
  createNecklace,
  deleteNecklace,
  updateNecklace,
} = require("../queries/necklaces");

necklaces.get("/", async (req, res) => {
  const allNecklaces = await getAllNecklaces();
  if (allNecklaces[0]) {
    res.status(200).json(allNecklaces);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

necklaces.get("/:id", async (req, res) => {
  const { id } = req.params;
  const necklace = await getNecklace(id);
  if (necklace) {
    res.json(necklace);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

necklaces.post("/", async (req, res) => {
  try {
    const necklace = await createNecklace(req.body);
    res.json(necklace);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

necklaces.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedNecklace = await deleteNecklace(id);
  if (deletedNecklace.id) {
    res.json(deletedNecklace);
  } else {
    res.status(404).json("Necklace does not exist.");
  }
});

necklaces.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedNecklace = await updateNecklace(id, req.body);
  res.status(200).json(updatedNecklace);
});

module.exports = necklaces;
