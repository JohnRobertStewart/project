const User = require("../models/User");



module.exports = {
    getIndex: (req, res) => {

      res.render("index.ejs");
      console.log(req.sessionID);     
    },

};

 
  