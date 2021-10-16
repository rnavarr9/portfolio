let mongoose = require("mongoose");

// create model class
let userModel = mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", userModel);
