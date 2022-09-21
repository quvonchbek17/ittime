const express = require("express");
const router = express.Router();
const users = require('./users/users.js')
const forget = require('./forgetpassword/forget.js')
router
  .post("/users", users.Post)
  .post("/forgetpassword", forget.PostEmail)
  .post("/resetpassword", forget.PostNumber)
  .put("/newpassword", users.Update)


  module.exports = router;