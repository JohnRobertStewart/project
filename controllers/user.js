const cloudinary = require("../middleware/cloudinary");
const { db } = require("../models/User");
const User = require("../models/User");

module.exports =  {
  getProfile: async (req, res) => {
    try {    
      User.find({userName : req.user.userName, userPic : req.user.pic})
      .sort({rank: 1}); 
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
        { new: true }),  
        res.deleteAvatar;
    await User.findOneAndUpdate(  
        { _id: req.params.id},
        {$set: {pic: result.secure_url}},
        {new: true});               
        res.redirect("/profile");  
        res.deleteAvatar;        
    } catch (err) {
      console.log(req.body);
      res.redirect("/profile");
      console.error(err);
    }
  },

  deleteAvatar: async (req, res) => {
    try { 
      let post = await User.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      res.redirect("/profile");        
    } catch (err) {
      console.log(req.body);
      res.redirect("/profile");
      console.error(err);
      }
     },

   sortUsers: async(req, res) => {
      try {
        await User.findAndUpdate(    
        { _id: req.params.id},     
        {$sort : {rank: 1}},
        )        
     } catch (err) {
      console.log(err);
      res.redirect("/profile");
      console.error(err);
      }
     },
     
};


  
//cloudinary.v2.uploader.rename(from_public_id, to_public_id, options).then(callback);
//invalidate parameter to true
//cloudinary.uploader.upload(req.file.path, public_id: '/my_folder/my_public_id',  invalidate: true)