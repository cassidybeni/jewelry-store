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
    const oneBracelet = await db.one(
      "SELECT * FROM bracelets WHERE id=$1",
      id
    );
    return oneBracelet;
  } catch (e) {
    return e;
  }
};

const createBracelet = async (bracelet) => {
  try {
    const newBracelet = await db.one(
      "INSERT INTO bracelets (name, image, description, details, price) VALUES($1, $2, $3, $4, $5) RETURNING *",
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

module.exports = {
  getAllBracelets,
  getBracelet,
  createBracelet,
};
