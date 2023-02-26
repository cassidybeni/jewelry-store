const getBracelet = async (bracelet_id) => {
  try {
    const oneBracelet = await db.one(
      "SELECT * FROM bracelets WHERE id=$1",
      bracelet_id
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
  getBracelet,
  createBracelet,
};
