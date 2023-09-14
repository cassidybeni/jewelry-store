const db = require("../db/dbConfig.js");

const getAllEarrings = async () => {
  try {
    const allEarrings = await db.any("SELECT * FROM earrings");
    return allEarrings;
  } catch (e) {
    return e;
  }
};

const getEarring = async (id) => {
  try {
    const oneEarring = await db.one("SELECT * FROM earrings WHERE id=$1", id);
    return oneEarring;
  } catch (e) {
    return e;
  }
};

const createEarring = async (earring) => {
  try {
    const newEarring = await db.one(
      "INSERT INTO earrings (name, image, description, details, price) VALUES ($1,$2, $3, $4, $5) RETURNING *",
      [
        earring.name,
        earring.image,
        earring.description,
        earring.details,
        earring.price,
      ]
    );
    return newEarring;
  } catch (e) {
    return e;
  }
};

const deleteEarring = async (id) => {
  try {
    const deletedEarring = await db.one(
      "DELETE FROM earrings WHERE id=$1 RETURNING *",
      id
    );
    return deletedEarring;
  } catch (e) {
    return e;
  }
};

const updateEarring = async (id, earring) => {
  try {
    const updatedEarring = await db.one(
      "UPDATE earrings SET name=$1, image=$2, description=$3, details=$4, price=$5 WHERE id=$6 RETURNING *",
      [
        earring.name,
        earring.image,
        earring.description,
        earring.details,
        earring.price,
        id,
      ]
    );
    return updatedEarring;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllEarrings,
  getEarring,
  createEarring,
  deleteEarring,
  updateEarring,
};
