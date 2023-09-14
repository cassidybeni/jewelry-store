const db = require("../db/dbConfig.js");

const getAllBracelets = async () => {
  try {
    const allBracelets = await db.any("SELECT * FROM bracelets");
    return allBracelets;
  } catch (e) {
    return e;
  }
};

const getBracelet = async (id) => {
  try {
    const oneBracelet = await db.one("SELECT * FROM bracelets WHERE id=$1", id);
    return oneBracelet;
  } catch (e) {
    return e;
  }
};

const createBracelet = async (bracelet) => {
  try {
    const newBracelet = await db.one(
      "INSERT INTO bracelets (name, image, description, details, price) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        bracelet.name,
        bracelet.image,
        bracelet.description,
        bracelet.details,
        bracelet.price,
      ]
    );
    return newBracelet;
  } catch (e) {
    return e;
  }
};

const deleteBracelet = async (id) => {
  try {
    const deletedBracelet = await db.one(
      "DELETE FROM bracelets WHERE id=$1 RETURNING *",
      id
    );
    return deletedBracelet;
  } catch (e) {
    return e;
  }
};

const updateBracelet = async (id, bracelet) => {
  try {
    const updatedBracelet = await db.one(
      "UPDATE bracelets SET name=$1, image=$2, description=$3, details=$4, price=$5 WHERE id=$6 RETURNING *",
      [
        bracelet.name,
        bracelet.image,
        bracelet.description,
        bracelet.details,
        bracelet.price,
        id,
      ]
    );
    return updatedBracelet;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllBracelets,
  getBracelet,
  createBracelet,
  deleteBracelet,
  updateBracelet,
};
