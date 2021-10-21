/**
 * File name      : index.js
 * Student’s Name : Renzo Navarro
 * StudentID      : 301183749
 * Date           : 10/21/2021
 */

let express = require("express");
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
  res.render("projects", {
    title: "Projects",
    pageName: "Projects Page",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("services", {
    title: "Services",
    pageName: "Services Page",
    displayName: req.user ? req.user.displayName : "",
  });
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

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
