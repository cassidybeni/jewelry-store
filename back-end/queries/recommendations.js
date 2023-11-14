const db = require("../db/dbConfig.js");

const getAllRecommendations = async () => {
  try {
    const allrecommendations = await db.any("SELECT * FROM recommendations");
    return allrecommendations;
  } catch (e) {
    return e;
  }
};

const getRecommendation = async (id) => {
  try {
    const recommendation = await db.one("SELECT * FROM recommendations WHERE id=$1", id);
    return recommendation;
  } catch (e) {
    return e;
  }
};

const createRecommendation = async (recommendation) => {
  try {
    const newRecommendation = await db.one(
      "INSERT INTO recommendations (start_time, end_time) VALUES ($1, $2) RETURNING *",
      [recommendation.start_time, recommendation.end_time]
    );
    return newRecommendation;
  } catch (e) {
    return e;
  }
};

const deleteRecommendation = async (id) => {
  try {
    const deletedRecommendation = await db.one(
      "DELETE FROM recommendations WHERE id=$1 RETURNING *",
      id
    );
    return deletedRecommendation;
  } catch (e) {
    return e;
  }
};

const updateRecommendation = async (id, recommendation) => {
  try {
    const updatedRecommendation = await db.one(
      "UPDATE recommendations SET start_time=$1, end_time=$2 RETURNING *",
      [recommendation.start_time, recommendation.end_time]
    );
    return updatedRecommendation;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllRecommendations,
  getRecommendation,
  createRecommendation,
  deleteRecommendation,
  updateRecommendation,
};
