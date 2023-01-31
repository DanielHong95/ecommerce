const passport = require("passport");
const { Strategy } = require("passport-jwt");
const Users = require("../models/auth");

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) token = req.cookies["token"];
  return token;
};

const opts = {
  secretOrKey: "secret",
  jwtFromRequest: cookieExtractor,
};

passport.use(
  new Strategy(opts, async ({ id }, done) => {
    try {
      const user = await Users.findOne({ where: { id: id } });

      if (!user) {
        throw new Error("401 not authorized");
      }

      return await done(null, user);
    } catch (error) {
      console.log(error.message);
      done(null, false);
    }
  })
);
