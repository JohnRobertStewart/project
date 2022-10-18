const Bracket = require("../models/Bracket");
const { db } = require("../models/User");
const User = require("../models/User");

module.exports = {

//TODO : Rename Bracket to Matches.

// Create a bracket that is a collection of 2 users per match
// so the bracket is a thing, therefor matches should be a thing?
// https://mongoosejs.com/docs/subdocs.html
//create a subdocument of matches embedded inside brackets?
// Create EMPTY bracket FIRST, THEN populate with players?

getBracket: async (req, res) => {
const bracket = new Bracket;
await fillBracket;

} catch (err) {
  console.log(err);
}
};

// Bracket.findOne({rank: -1})

async function fillBracket() {
  try{
  return User.find({rank}).sort
  ({ rank : -1}).exec(function(err, Bracket){ 
     bracket.populate(p1,p2)})
    } catch (err) {
      console.log(err);
    }
  };

  //sort the bracket and return it... update it?
  function sortBracket(User, Bracket) {
  db.Users.find    

  }

  //Embedded documents maybe?

//model.find({ ... }).sort({ field : criteria}).exec(function(err, model){ ... });

//sort desc:{ user.rank: -1}

/*
BracketSchema.pre("save", function save(next) { 
   try {
  Bracket.find({}).select(p1,p2).sort(rank).populate('User')
  res.send(p1,p2)
} catch (err) {
   console.log(err);
 }
});*/


/* createBracket : for each user in users / 2
                  create a bracket then
                  if there is one left over,
                  add it to a by? */

                  