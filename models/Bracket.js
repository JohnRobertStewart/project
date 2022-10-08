const mongoose = require("mongoose");

const BracketSchema = new mongoose.Schema({
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    userPic:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "userPic",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("Bracket", BracketSchema);