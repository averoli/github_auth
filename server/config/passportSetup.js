require("dotenv").config();
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../model/user");

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function () {
      console.log(process.env.GITHUB_CLIENT_ID);
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ githubId: profile.id }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        }

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
