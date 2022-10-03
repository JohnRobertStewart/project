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
      await User.findOneAndUpdate(    
        { _id: req.params.id },   
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
    const result = await cloudinary.uploader.upload(req.file.path);
    await User.findOneAndUpdate(       
        { _id: req.params.id},
        {$set: {cloudinaryId: result.public_id}},
        { overwrite: true }),          
    await User.findOneAndUpdate(  
        { _id: req.params.id},
        {$set: {pic: result.secure_url}},
        {new: true});               
        res.redirect("/profile");      
    } catch (err) {
      console.log(req.body);
      res.redirect("/profile");
      console.error(err);
    }
  },
};

//invalidate parameter to true
//cloudinary.uploader.upload(req.file.path, public_id: '/my_folder/my_public_id',  invalidate: true),