const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./utils/db");
require("dotenv").config();
const models = require("./models");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/users");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: "secretcode", resave: true, saveUninitialized: true })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./utils/passportConfig")(passport);

// routes
app.use("/dev", require("./routes/dev"));
app.use("/beers", require("./routes/beer"));
app.use("/wines", require("./routes/wine"));
app.use("/spirits", require("./routes/spirit"));
app.use("/products", require("./routes/products"));
app.use("/favorites", require("./routes/favorites"));
app.use("/carts", require("./routes/cart"));
app.use("/users", require("./routes/users"));

// db connection
(async () => {
  try {
    await db.sync({
      models,
      force: false,
      alter: true,
    });
    console.log("Server has started on port 5000");
    app.listen(process.env.EXTERNAL_PORT || 5000);
  } catch (error) {
    console.error(error);
  }
})();
