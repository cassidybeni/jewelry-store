const { getBracelet, createBracelet } = require("../queries/bracelets");

bracelets.get("/:bracelet_id", async (req, res) => {
  const { bracelet_id } = req.params;
  const bracelet = await getBracelet(bracelet_id);
  if (bracelet) {
    res.json(bracelet);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

bracelets.post("/", async (req, res) => {
  try {
    const bracelet = await createBracelet(req.body);
    res.json(bracelet);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});
