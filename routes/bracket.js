const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const userController = require("../controllers/user");
const bracketController = require("../controllers/bracket");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/bracket", bracketController.getBracket);
router.post("/bracket", bracketController.getBracket);

module.exports = router;
