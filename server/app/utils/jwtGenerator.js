const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(id) {
  const payload = {
    user: {
      id: id,
    },
  };

  return jwt.sign(payload, "jwtSecret", { expiresIn: "1h" });
}

module.exports = jwtGenerator;
