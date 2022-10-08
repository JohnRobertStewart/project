const User = require("../models/User");

module.exports = {

getBracket: async (req, res) => {
    try {
    const user = await User.find();   
    res.render("bracket.ejs", {user: user, userName: user.userName, userPic: user.pic})         
    console.log(req.sessionID);
    } catch (err) {
      console.log(err);
    }
  },
};

