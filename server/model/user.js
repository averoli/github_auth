const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  accessToken: {
    type: String,
    require: true,
  },
  gitHubId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
