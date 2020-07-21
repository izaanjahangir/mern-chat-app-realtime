const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  profilePicture: {
    type: String,
  },
  lastPasswordChanged: {
    type: Date,
    select: false,
  },
  pushToken: {
    type: String,
    default: "",
  },
});

schema.plugin(uniqueValidator, { message: "{PATH} already exist." });

schema.methods.getPublicProfile = function () {
  const user = this.toObject();

  delete user.password;

  return user;
};

const User = mongoose.model("user", schema);

module.exports = User;
