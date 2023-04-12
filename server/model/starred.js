const mongoose = require("mongoose");

const starredSchema = new mongoose.Schema({
  name: String,
  url: String,
});

module.exports = mongoose.model("Starred", starredSchema);
