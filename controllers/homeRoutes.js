const router = require("express").Router();

const { Character, User, Class } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/login", () => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/list", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({});
    const users = userData.map((project) => project.get({ plain: true }));

    const characterData = await Character.findAll({
      include: [Class]
    });
    const characters = characterData.map((character) =>
      character.get({ plain: true })
    );

    const classData = await Class.findAll({});
    const classes = classData.map((charaClass) =>
      charaClass.get({ plain: true })
    );
    characters.forEach((character, i) => (character.class = classes[i]));

    const currentUserData = await User.findByPk(req.session.user_id);
    const user = currentUserData.get({ plain: true });

    delete user.password;

    res.render("list", {
      user,
      characters,
      users,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/character", withAuth, (req, res) => {
  res.render("character", { loggedIn: req.session.loggedIn });
});

router.post("/", async (req, res) => {
  try {
    const dbCharaData = await Character.create({
      name: req.body.name,
      race: req.body.race,
      gender: req.body.gender
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbCharaData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
