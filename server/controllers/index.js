let express = require("express");
let router = express.Router();
let moongoose = require("mongoose");
let passport = require("passport");

// create the User Model instance
let userModel = require("../models/user");
let User = userModel.User; // alias

var socialNetworksData = require("../../public/javascripts/data");

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    pageName: "Home Page",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("about", {
    title: "About",
    pageName: "About Page",
    socialNetworksData,
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render("projects", { title: "Projects", pageName: "Projects Page", displayName: req.user ? req.user.displayName : "" });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("services", { title: "Services", pageName: "Services Page", displayName: req.user ? req.user.displayName : "", });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("contact", {
    title: "Contact",
    subtitle: "Let's work together",
    pageName: "Contact page",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayTermsAndConditions = (req, res, next) => {
  res.render("termsAndConditions", {
    title: "Terms and Conditions",
    subtitle: "Agreement on data policy",
    pageName: "Terms and Conditions",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayLoginPage = (req, res, next) => {
  // check if the user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processLoginPage = (req, res, next) => {
  console.log({test: req.body})
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/user-list");
    });
  })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  // check if the user is not already logged in
  if (!req.user) {
    res.render("auth/register", {
      title: "Register",
      messages: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName,
    contactNumber: req.body.contactNumber
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting new user", err);
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
      }
      return res.render("auth/register", {
        title: "Regiter",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      });
    } else {
      // if no error exists, then registration is successful

      // redirect the user and authenticate them
      return passport.authenticate("local")(req, res, () => {
        res.redirect("/user-list");
      });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
