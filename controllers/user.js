const { ReturnDocument, ObjectId } = require("mongodb");
const cloudinary = require("../middleware/cloudinary");
const User = require("../models/User");

module.exports = {
  getProfile: async (req, res) => {
    try {  
      const profile = await User.find({ user: req.user.id})    
      res.render("profile.ejs", {profiles: profile, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },

  updateAvatar: async (req, res) => {
    try {
    await User.findOneAndReplace({ _id: User.pic }); 
    await cloudinary.uploader.findOneAndReplace(post.cloudinaryId);
      console.log("Avatar has been updated!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};


