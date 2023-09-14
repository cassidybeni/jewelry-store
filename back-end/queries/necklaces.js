const db = require("../db/dbConfig.js");

const getAllNecklaces = async () => {
  try {
    const allNecklaces = await db.any("SELECT * FROM necklaces");
    return allNecklaces;
  } catch (e) {
    return e;
  }
};

const getNecklace = async (id) => {
  try {
    const oneNecklace = await db.one("SELECT * FROM necklaces WHERE id=$1", id);
    return oneNecklace;
  } catch (e) {
    return e;
  }
};

const createNecklace = async (necklace) => {
  try {
    const newNecklace = await db.one(
      "INSERT INTO necklaces (name, image, description, details, price) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        necklace.name,
        necklace.image,
        necklace.description,
        necklace.details,
        necklace.price,
      ]
    );
    return newNecklace;
  } catch (e) {
    return e;
  }
};

const deleteNecklace = async (id) => {
  try {
    const deletedNecklace = await db.one(
      "DELETE FROM necklaces WHERE id=$1 RETURNING *",
      id
    );
    return deletedNecklace;
  } catch (e) {
    return e;
  }
};

const updateNecklace = async (id, necklace) => {
  try {
    const updatedNecklace = await db.one(
      "UPDATE necklaces SET name=$1, image=$2, description=$3, details=$4, price=$5 WHERE id=$6 RETURNING *",
      [
        necklace.name,
        necklace.image,
        necklace.description,
        necklace.details,
        necklace.price,
        id,
      ]
    );
    return updatedNecklace;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllNecklaces,
  getNecklace,
  createNecklace,
  deleteNecklace,
  updateNecklace,
};
