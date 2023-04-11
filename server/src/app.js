//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!DEPENDENCIES
const express = require("express");
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../model/user");

const app = express();
app.use(passport.initialize());

//!CONNECT DB
const connect = require("../config/db");
connect();

// !CONFIGURE Passport.js
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // Check if user already exists in database
      User.findOne({ githubId: profile.id }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        }
        // If user does not exist, create new user in database
        const newUser = new User({
          githubId: profile.id,
          accessToken: accessToken,
          userName: profile.userName,
          email: profile.emails[0].value,
        });

        newUser.save(function (err) {
          if (err) {
            return done(err);
          }
          return done(null, newUser);
        });
      });
    }
  )
);

// Serialize user for session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//!ROUTES
app.get("/", (req, res) => {
  res.send("GitHub social login implementation");
});

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/profile");
  }
);

app.get("/profile", function (req, res) {
  res.send(`Welcome to ${req.user.userName} profile`);
});

app.get("/users", isLoggedIn, function (req, res) {
  User.find({}, function (err, users) {
    if (err) console.log(err);
    res.json(users);
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
