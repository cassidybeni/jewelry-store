const express = require("express");
const items = express.Router();
const {
  getAllItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
} = require("../queries/items");

items.get("/", async (req, res) => {
  const allItems = await getAllItems();
  if (allItems[0]) {
    res.status(200).json(allItems);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

items.get("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await getItem(id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

items.post("/", async (req, res) => {
  try {
    const item = await createItem(req.body);
    res.json(item);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

items.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedItem = await deleteItem(id);
  if (deletedItem.id) {
    res.json(deletedItem);
  } else {
    res.status(404).json("item does not exist.");
  }
});

items.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedItem = await updateItem(id, req.body);
  res.status(200).json(updatedItem);
});

module.exports = items;
