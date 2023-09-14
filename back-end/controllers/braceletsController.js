const express = require("express");
const bracelets = express.Router();
const {
  getAllBracelets,
  getBracelet,
  createBracelet,
  deleteBracelet,
  updateBracelet,
} = require("../queries/bracelets");

bracelets.get("/", async (req, res) => {
  const allBracelets = await getAllBracelets();
  if (allBracelets[0]) {
    res.status(200).json(allBracelets);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

bracelets.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bracelet = await getBracelet(id);
  if (bracelet) {
    res.json(bracelet);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

bracelets.post("/", async (req, res) => {
  try {
    const bracelet = await createBracelet(req.body);
    res.json(bracelet);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

bracelets.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBracelet = await deleteBracelet(id);
  if (deletedBracelet.id) {
    res.status(200).json(deletedBracelet);
  } else {
    res.status(404).json("Bracelet does not exist.");
  }
});

bracelets.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBracelet = await updateBracelet(id, req.body);
  res.status(200).json(updatedBracelet);
});

module.exports = bracelets;
