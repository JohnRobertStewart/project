const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const upload = require("../middleware/multer");
const userController = require("../controllers/user");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/profile", ensureAuth, userController.getProfile);

router.post("/user/changeName/:id", ensureAuth, userController.changeName);

//router.get("/user/sortUsers/:id", ensureAuth, userController.sortUsers);

router.post("/user/updateAvatar/:id", ensureAuth, upload.single("file"), userController.updateAvatar);

router.delete("/user/deleteAvatar/:id", ensureAuth, userController.deleteAvatar);

module.exports = router;
