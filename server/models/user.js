// required modules for the user model

let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

// create model class
let User = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "Username is required",
    },
    email: {
      type: String,
      default: "",
      trim: true,
      required: "Email address is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Contact name is required",
    },
    contactNumber: {
      type: String,
      default: "",
      trim: true,
      required: "Contact number is required"
    },
    created: {
      type: Date,
      default: Date.now,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "user" }
);

// configure options for User model

let options = { missingPasswordError: "Wrong / Missing Password" };

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", User);
