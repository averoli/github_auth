//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!DEPENDENCIES
const express = require("express");
const passport = require("passport");
const User = require("../model/user");
const authRoutes = require("../routes/githubRouter");
const userRouter = require("../routes/usersRouter")
const protectedRoute = require("../routes/protectedRouter")
const passportSetup = require("../config/passportSetup");
const app = express();

//!CONNECT DB
const connect = require("../config/db");
connect();

// !ROUTES
app.use("/", userRouter);
app.use("/auth", authRoutes);

// Deserialize user from session
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// !MIDDLEWARE FOR PROTECTING ROUTES
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}


//!START SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
