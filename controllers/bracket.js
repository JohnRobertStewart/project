const Bracket = require("../models/Bracket");
const User = require("../models/User");
const { db } = require("../models/User");

//TODO : 
// OK -  Write a function to determine the NUMBER OF USERS 
// SORT them and for every 2 USERS SORTED BY RANK
// Create a BRACKET SCHEMEA
// If there is one left over, leave ONE user blank or create a DEFAULT fill 

// https://mongoosejs.com/docs/subdocs.html
//create a subdocument of matches embedded inside brackets?
// Create EMPTY bracket FIRST, THEN populate with players?


//import {sortUsers} from './user'
const {sortUsers} = require("./user")  
module.exports = {
  
getBracket: async (req, res) => {
  try {    
    const result = await User.find[{$sort : {rank : 1}}].populate('p1');
    const bracket = new Bracket({ 
        p1: result.body.userName,
        p2: result.body.userName
      })
    await  
    res.render("bracket.ejs");
  } catch (err) {
    console.log(err);
  }
},
}

// Bracket.findOne({rank: -1})

/*
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
*/
/*
  }
const findRank = function(Users){
let rank = Users[0],
for (let i = 0; i < Users.length; i++){
  if(Users[i] > Users[0])
  Users.
}
}
*/

  //Embedded documents maybe?

//model.find({ ... }).sort({ field : criteria}).exec(function(err, model){ ... });

//sort desc:{ user.rank: -1}

/*
BracketSchema.pre("save", function save(next) 
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

                  