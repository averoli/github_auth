const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../model/user");

router.get("/", (req, res) => {
  res.send("GitHub social login implementation");
});

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get("/github/callback", passport.authenticate("github"), (req, res) => {
  res.send("Callback URI");
});

router.get("/users", async function (req, res) {
  try {
    const users = await User.find({}, "-accessToken");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
