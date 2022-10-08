const Bracket = require("../models/Bracket");
const User = require("../models/User");

module.exports = {

getBracket: async (req, res) => {
    try {
    const bracket = new Bracket   
    res.render("bracket.ejs")         
    console.log(req.sessionID);
    } catch (err) {
      console.log(err);
    }
  },
};

