const db = require("../db/dbConfig.js");

const getAllRings = async () => {
  try {
    const allRings = await db.any("SELECT * FROM rings");
    return allRings;
  } catch (e) {
    return e;
  }
};

const getRing = async (id) => {
  try {
    const ring = await db.one("SELECT * FROM rings WHERE id=$1", id);
    return ring;
  } catch (e) {
    return e;
  }
};

const createRing = async (ring) => {
  try {
    const newRing = await db.one(
      "INSERT INTO rings (name, image, description, details, price) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [ring.name, ring.image, ring.description, ring.details, ring.price]
    );
    return newRing;
  } catch (e) {
    return e;
  }
};

const deleteRing = async (id) => {
  try {
    const deletedRing = await db.one(
      "DELETE FROM rings WHERE id=$1 RETURNING *",
      id
    );
    return deletedRing;
  } catch (e) {
    return e;
  }
};

const updateRing = async (id, ring) => {
  try {
    const updatedRing = await db.one(
      "UPDATE rings SET name=$1, image=$2, description=$3, details=$4, price=$5 WHERE id=$6 RETURNING *",
      [ring.name, ring.image, ring.description, ring.details, ring.price, id]
    );
    return updatedRing;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllRings,
  getRing,
  createRing,
  deleteRing,
  updateRing,
};
