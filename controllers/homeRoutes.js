const { Character } = require("../models");

const router = require("express").Router();
// const { User } = require('../models');
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

router.post("/", async (req, res) => {
    try {
      const dbCharaData = await Character.create({
        name: req.body.name,
        race: req.body.race,
        gender: req.body.gender,
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
