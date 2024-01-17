const { register } = require("../authController");
const router = require("express").Router();

router.post("/register", register);

module.exports = router;
