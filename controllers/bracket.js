const Bracket = require("../models/Bracket");
const User = require("../models/User");

module.exports = {

getBracket: async (req, res) => {
await    {
  const bracket = new Bracket.create
     await {const : pl1 == User.find({rank}).sort({ rank : -1})};
   
     await {const : pl2 = User.find({rank}).sort({ rank : -1})};
      const bracket = new Bracket({
        match: {
          p1: pl1, 
          p2: pl2,
          },
         winner: {type: String},
         vod: {type: String},
    });
    res.render("bracket.ejs")         
    console.log(req.sessionID);
    } catch (err) {
      console.log(err);
    }
  },
};

Bracket.findOne({rank: -1})

async function populateBracket(bracket) {
  try{
  return User.find({rank}).sort
  ({ rank : -1}).exec(function(err, Bracket){ 
     bracket.populate(p1,p2)})
    } catch (err) {
      console.log(err);
    }
  };


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

                  