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
  }
});

module.exports =  mongoose.model("User", UserSchema);