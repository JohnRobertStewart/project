const mongoose = require("mongoose");

const BracketSchema = new mongoose.Schema({
   match: {
    p1: { type: mongoose.Types.ObjectId , 
        required: true, unique: true, ref: 'User' }, 
    p2: { type: mongoose.Types.ObjectId ,
         required: true, unique: true, ref: 'User' },
    },
   winner: {type: String},
   vod: {type: String},

});


 BracketSchema.pre("save", function save(next) { 
    try {
   Bracket.find({}).select(p1).sort(rank).populate('User')
   res.send(p1)
} catch (err) {
    console.log(err);
  }
 });

 module.exports = mongoose.model("Bracket", BracketSchema);


