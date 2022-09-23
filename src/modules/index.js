const express = require("express");
const router = express.Router();
const users = require('./users/users.js')
const forget = require('./forgetpassword/forget.js')
const login = require('./login/login')
router
  .post("/register", users.Post)
  .post("/login", login.token)
  .post("/checkemail", forget.PostEmail)
  .post("/verificationcode", forget.PostNumber)
  .put("/newpassword", users.Update)


  module.exports = router;