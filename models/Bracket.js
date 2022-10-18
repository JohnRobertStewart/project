const mongoose = require("mongoose");
const { populate } = require("./User");
const User = require("./User");

const BracketSchema = new mongoose.Schema({
   match: {
    p1: [{body:String, type: mongoose.Schema.Types.ObjectId , 
        required: true, unique: true, ref: 'User' }], 
    p2: [{body: String, type: mongoose.Schema.Types.ObjectId ,
         required: true, unique: true, ref: 'User' }],
    },
   winner: {type: String},
   vod: {type: String},

});

// Will this work? How to presave a the sorted users?
// Its only finding one user?
BracketSchema.pre("save", function save(next) {
   const bracket =  BracketSchema.findOne({User: User.rank.sort}).populate('p1');
   bracket.p1;
   
 });

 module.exports = mongoose.model("Bracket", BracketSchema);

//Embedded documents maybe?

/* From the internet : 
 {
    _id :.., <- match id
    players:[playerId1, playerId2],
    resultForWinner: <either "WINS_TOURNAMENT" or match id of next match>
    resultForLoser: <either "EXIT_TOURNAMENT" or match id of loser bracket match
 }
*/