const mongoose = require("mongoose");


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

