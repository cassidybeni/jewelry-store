const express = require("express");
const recommendations = express.Router();
const {
  getAllRecommendations,
  getRecommendation,
  createRecommendation,
  deleteRecommendation,
  updateRecommendation,
} = require("../queries/recommendations");

recommendations.get("/", async (req, res) => {
  const allRecommendations = await getAllRecommendations();
  if (allRecommendations[0]) {
    res.status(200).json(allRecommendations);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

recommendations.get("/:id", async (req, res) => {
  const { id } = req.params;
  const recommendation = await getRecommendation(id);
  if (recommendation) {
    res.json(recommendation);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

recommendations.post("/", async (req, res) => {
  try {
    const recommendation = await createRecommendation(req.body);
    res.json(recommendation);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

recommendations.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRecommendation = await deleteRecommendation(id);
  if (deletedRecommendation.id) {
    res.json(deletedRecommendation);
  } else {
    res.status(404).json("recommendation does not exist.");
  }
});

recommendations.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedRecommendation = await updateRecommendation(id, req.body);
  res.status(200).json(updatedRecommendation);
});

module.exports = recommendations;
