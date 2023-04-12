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
    res.status(500).send("Internal server error");
  }
});

router.post("/repositories/:id/star", async function (req, res) {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    user.starredRepositories.push(id);
    await user.save();

    res.send("Repository starred");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
module.exports = router;
