const db = require("../db/dbConfig.js");

const getAllWatches = async () => {
  try {
    const allWatches = await db.any("SELECT * FROM watches");
    return allWatches;
  } catch (e) {
    return e;
  }
};

const getWatch = async (id) => {
  try {
    const watch = await db.one("SELECT * FROM watches WHERE id=$1", id);
    return watch;
  } catch (e) {
    return e;
  }
};

const createWatch = async (watch) => {
  try {
    const newWatch = await db.one(
      "INSERT INTO watches (name, image, description, details, price) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [watch.name, watch.image, watch.description, watch.details, watch.price]
    );
    return newWatch;
  } catch (e) {
    return e;
  }
};

const updateWatch = async (id, watch) => {
  try {
    const updatedWatch = await db.one(
      "UPDATE watches SET name=$1, image=$2, description=$3, details=$4, price=$5 WHERE id=$6 RETURNING *",
      [
        watch.name,
        watch.image,
        watch.description,
        watch.details,
        watch.price,
        id,
      ]
    );
    return updatedWatch;
  } catch (e) {
    return e;
  }
};

const deleteWatch = async (id) => {
  try {
    const deletedWatch = await db.one(
      "DELETE FROM watches WHERE id=$1 RETURNING *",
      id
    );
    return deletedWatch;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllWatches,
  getWatch,
  createWatch,
  deleteWatch,
  updateWatch,
};
