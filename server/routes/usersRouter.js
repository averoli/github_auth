const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/", (req, res) => {
  res.send("GitHub social login implementation");
});

router.get("/users", async function (req, res) {
  try {
    const users = await User.find({}, "-accessToken");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});


module.exports = router;
