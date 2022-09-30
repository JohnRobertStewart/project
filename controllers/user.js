const cloudinary = require("../middleware/cloudinary");
const User = require("../models/User");

module.exports =  {
  getProfile: async (req, res) => {
    try {     
      const user = await User.findById(req.params.id);
      res.render("profile.ejs", {user: req.user, pic: req.user.pic});
    } catch (err) {
      console.log(err);
    }
  },


  updateAvatar: async (req, res) => {
    try {
    const user = await User.findById({_id: req.params.id});
    await cloudinary.uploader.destroy(pic.cloudinaryId);
    const result = await cloudinary.uploader.upload(req.file.path);
    await User.findByIdAndUpdate(user,  {
      pic: {result}
       });
    
    res.redirect("/profile");
    } catch (err) {
      console.error(err);
    }
  },
};


