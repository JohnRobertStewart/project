const Bracket = require("../models/Bracket");
const Users = require("../models/User");
const mongoose = require("mongoose");
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

    const sort = { rank: 1 }  
    Users.find().sort(sort).toArray((err, ans,) => {
        if (!err) {
          return(Users);
            console.log(ans);
        }
        else {
          console.log(ans);
        }
    })

    sortUsers: async (req, res) => {
      try {
       await req.Users[{$sort : {rank : 1}}];
       res.return(Users); 
       console.log("bee2");
      } catch (err) {
        console.log("bee");
      }
     },

    function sortUsers(Users){
    const p1 =  User.find[{$sort : {rank : 1}}].populate('p1');
    const p2 =  User.find[{$sort : {rank : 1}}].populate('p2');

    const bracket = new Bracket({ 
     
      p1: result.body.userName,
      p2: result.body.userName,
      })
      console.log("beet");
    await  
    res.render("bracket.ejs");
    res.send(p1)
    res.send(p2)
  }
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

                  