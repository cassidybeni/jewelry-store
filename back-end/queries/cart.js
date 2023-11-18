const db = require("../db/dbConfig.js");

const getAllItems = async () => {
  try {
    const allItems = await db.any("SELECT * FROM items");
    return allItems;
  } catch (e) {
    return e;
  }
};

const getItem = async (id) => {
  try {
    const item = await db.one("SELECT * FROM items WHERE id=$1", id);
    return item;
  } catch (e) {
    return e;
  }
};

const createItem = async (item) => {
  try {
    const newItem = await db.one(
      "INSERT INTO items (product_name, added_at) VALUES ($1, $2) RETURNING *",
      [item.product_name, item.added_at]
    );
    return newItem;
  } catch (e) {
    return e;
  }
};

const deleteItem = async (id) => {
  try {
    const deletedItem = await db.one(
      "DELETE FROM items WHERE id=$1 RETURNING *",
      id
    );
    return deletedItem;
  } catch (e) {
    return e;
  }
};

const updateItem = async (id, item) => {
  try {
    const updatedItem = await db.one(
      "UPDATE items SET product_name=$1, added_at=$2 WHERE id=$3 RETURNING *",
      [item.product_name, item.added_at, id]
    );
    return updatedItem;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
};
