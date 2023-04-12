const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  gitHubId: {
    type: String,
    require: true,
  },
  accessToken: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  starredRepositories: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Repository" },
  ],
});

module.exports = mongoose.model("User", UserSchema);
