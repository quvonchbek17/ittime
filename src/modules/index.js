const express = require("express");
const router = express.Router();
const users = require('./users/users.js')
const forget = require('./forgetpassword/forget.js')
router
  .post("/register", users.Post)
  .post("/checkemail", forget.PostEmail)
  .post("/verificationcode", forget.PostNumber)
  .put("/newpassword", users.Update)


  module.exports = router;