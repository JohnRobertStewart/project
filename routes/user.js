const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const upload = require("../middleware/multer");
const userController = require("../controllers/user");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/profile", ensureAuth, userController.getProfile);

router.get("/:id", ensureAuth, userController.getProfile);

router.get("/user", ensureAuth, userController.getProfile );

router.put("/updateAvatar", upload.single("file"), userController.updateAvatar);

module.exports = router;
