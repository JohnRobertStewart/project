const mongoose = require("mongoose");
const { populate } = require("./User");
const User = require("./User");

const BracketSchema = new mongoose.Schema({
   match: {
    p1: [{body:String, type: mongoose.Schema.Types.ObjectId , 
        required: true, unique: true, ref: 'User',
        p1pic: mongoose.Schema.Types.ObjectId, ref: 'pic' }], 
    p2: [{body: String, type: mongoose.Schema.Types.ObjectId ,
         required: true, unique: true, ref: 'User',
         p2pic: mongoose.Schema.Types.ObjectId, ref: 'pic' }],
    },
   winner: {type: String},
   vod: {type: String},

});
module.exports = mongoose.model("Bracket", BracketSchema);

// Will this work? How to presave a the sorted users?
// Its only finding one user?
// do i pre save or just populate when its made ?? idk lol
/*
BracketSchema.pre("save", function save(next) {
   const bracket =  BracketSchema.findOne({User: User.rank.sort}).populate('p1', 'p2');
   bracket.p1;
   bracket.p2;
   next;
 module.exports = mongoose.model("Bracket", BracketSchema);
});
*/
//Embedded documents maybe?

/* From the internet : 
 {
    _id :.., <- match id
    players:[playerId1, playerId2],
    resultForWinner: <either "WINS_TOURNAMENT" or match id of next match>
    resultForLoser: <either "EXIT_TOURNAMENT" or match id of loser bracket match
 }
*/