const express = require("express");
const router = express.Router();

const authcontroller = require("../controllers/auth-controller");
const { signupSchema, loginSchima } = require("../validators/auth-validator");

const validate = require("../middleware/validate-middleware");
const loginSchema = require("../validators/login-validator");

const authMiddleware = require("../middleware/auth-middleware");

// router.route("/").get(authcontroller.home);

// router.route("/register").get(authcontroller.register);

router.route("/register").post(validate(signupSchema), authcontroller.register);
router.route("/login").post(validate(loginSchima), authcontroller.login);

// router.route("/ContactUs").post(validate());

router.route("/user").get(authMiddleware, authcontroller.user);
module.exports = router;
