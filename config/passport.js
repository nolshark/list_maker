const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

//Using a Local Strategy to login with a username/email and password. 
passport.use(
  new LocalStrategy(
    // The user will sign in using an email, rather than a "username". 
    {
      usernameField: "email",
    },
    (email, password, done) => {
      db.User.findOne({
        where: {
          email: email,
        },
      }).then((dbUser) => {
        // If there's no user with the given email. 
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email.",
          });
        }
        // If there is a user with the given email, but the incorrect password is used. 
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password.",
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);
// Keep authentication state across HTTP requests with sequelize. 
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;