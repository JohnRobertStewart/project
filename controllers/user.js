const cloudinary = require("../middleware/cloudinary");
const User = require("../models/User");
const { findByIdAndUpdate } = require("../models/User");

module.exports = {
  getProfile: async (req, res) => {
    try {  
      const profile = await User.find({ user: req.user.id})    
      res.render("profile.ejs", {profiles: profile, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },

  updateProfile: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      await findByIdAndUpdate({

      });
      console.log("Profile pic has been updated!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};

