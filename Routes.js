const express = require('express');
const {registerUser,registerForm} = require("./UserController");

const router = express.Router();

router.route("/").get(registerForm);
router.route("/create-user").post(registerUser);

module.exports = router;