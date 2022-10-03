const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const upload = require("../middleware/multer");
const userController = require("../controllers/user");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/profile", ensureAuth, userController.getProfile);

router.post("/user/changeName", ensureAuth, userController.changeName);

router.put("/updateAvatar", ensureAuth, upload.single("file"), userController.updateAvatar);

module.exports = router;
