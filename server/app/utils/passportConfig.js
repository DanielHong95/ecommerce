const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      Users.findOne({ where: { username } })
        .then((user) => {
          if (!user) return done(null, false);
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        })
        .catch((err) => {
          throw err;
        });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    Users.findByPk(id)
      .then((user) => {
        const userInformation = {
          username: user.username,
        };
        cb(null, userInformation);
      })
      .catch((err) => {
        cb(err, null);
      });
  });
};
