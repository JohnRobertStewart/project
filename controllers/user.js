const cloudinary = require("../middleware/cloudinary");
const User = require("../models/User");

module.exports =  {
  getProfile: async (req, res) => {
    try {     
      res.render("profile.ejs", {user: req.user, pic: req.user.pic});
    } catch (err) {
      console.log(err);
    }
  },

  changeName: async  (req, res) => {
    try {
      await User.findOneAndUpdate(loggedIn = true,        
        {$set: {userName: req.body.changeUsername}},
        {new: true});
        res.redirect('/profile');
        console.log(User.userName);
        console.log();
     } catch  (err) { 
      console.log(User.userName);

      console.error(err);
      res.status(500).send(err)
     }
  },

  updateAvatar: async (req, res) => {
    try {    
      
      await cloudinary.uploader.destroy(user.cloudinaryId.id);
      // Upload image to cloudinary
      let result;
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path);
      }
      const data = {        
        pic: result.secure_url || user.avatar,
        cloudinaryId: result.public_id || user.pic,
      };        
     
      user = await User.findByIdAndUpdate(req.params.id, data, { new: true });
      res.redirect("/profile");      
    } catch (err) {
      console.log(req.body);
     // console.log(result);
      res.redirect("/profile");
      console.error(err);
    }
  },
};


//cloudinary.uploader.upload(req.file.path, public_id: '/my_folder/my_public_id',  invalidate: true),