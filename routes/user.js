const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const userController = require("../controllers/user");
const { replaceOne } = require("../models/User");

const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/:id", ensureAuth, userController.getProfile);

router.get("/profile", ensureAuth, userController.getProfile);

router.get("/updateAvatar/:id", userController.updateAvatar);

router.put("/updateAvatar/:id", userController.updateAvatar);

module.exports = router;
