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

module.exports = router;
