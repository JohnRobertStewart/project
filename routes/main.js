const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const authController = require("../controllers/auth");
const homeController = require("../controllers/home");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", homeController.getIndex);
router.get("/bracket", homeController.getBracket);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", upload.single("file"), authController.postSignup);



module.exports = router;
