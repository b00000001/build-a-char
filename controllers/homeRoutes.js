const { Character } = require("../models");

const router = require("express").Router();
const { User } = require("../models");
// const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/login", () => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/list", async (req, res) => {
  try {
    const userData = await User.findAll({});
    // const characterData = await Character.findAll({});

    const users = userData.map((project) => project.get({ plain: true }));
    // const characters = characterData.map((character) =>
    //   character.get({ plain: true })
    // );

    const currentUserData = await User.findByPk(req.session.user_id);
    const user = currentUserData.get({ plain: true });

    delete user.password;

    res.render("list", {
      user,
      //   characters,
      users,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/character", (req, res) => {
  res.render("character");
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

module.exports = router;
