const mongoose = require("mongoose");
const { populate } = require("./User");
const User = require("./User");

const BracketSchema = new mongoose.Schema({
   match: {
    p1: [{ type: mongoose.Schema.Types.ObjectId , 
        required: true, unique: true, ref: 'User' }], 
    p2: [{ type: mongoose.Schema.Types.ObjectId ,
         required: true, unique: true, ref: 'User' }],
    },
   winner: {type: String},
   vod: {type: String},

});


 module.exports = mongoose.model("Bracket", BracketSchema);


