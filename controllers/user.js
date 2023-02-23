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
};
