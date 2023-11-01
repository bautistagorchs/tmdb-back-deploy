const express = require("express");
const router = express.Router();
const User = require("../db/models/User");
const { generateToken, validateToken } = require("../config/token");

// see all users
// router.get("/", (req, res) => {
//   User.findAll()
//     .then((users) => res.status(200).send(users))
//     .catch((err) => console.error(err));
// });

// register new user
router.post("/register", (req, res) => {
  User.create(req.body).then((newUser) => res.status(201).send(newUser));
});

// login with existing user
router.post("/login", (req, res) => {
  // find one user via email
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    // if doesn`t exist sendStatus 401
    if (!user) return res.sendStatus(401);

    // validate hasedPassword
    user.validatePassword(req.body.password).then((match) => {
      if (!match) return res.sendStatus(401);
      // set payload to send to client
      const payload = {
        email: user.email,
        username: user.username,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
});

router.use("/", (req, res) => res.sendStatus(404));

module.exports = router;
