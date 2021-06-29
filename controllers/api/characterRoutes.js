const router = require("express").Router();
const { Character } = require("../../models");
router.post("/", async (req, res) => {
  try {
    console.log(req.session.user_id);
    if (req.session.user_id) {
      const dbCharaData = await Character.create({
        name: req.body.name,
        race: req.body.race,
        gender: req.body.gender,
        class_id: 1,
        user_id: req.session.user_id
      });
      res.status(200).json(dbCharaData);
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
