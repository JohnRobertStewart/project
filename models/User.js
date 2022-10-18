const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { none } = require("../middleware/multer");

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  pic: {type: String, require: true },
  cloudinaryId: {type : String, require: true,},
  isAdmin:{ type: Boolean, require: true, default: false},
  loggedIn: {type: Boolean, require: true, default: false },
  rank: {type: Number },
});


UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);