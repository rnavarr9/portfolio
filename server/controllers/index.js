let express = require("express");
let router = express.Router();

var socialNetworksData = require("../../public/javascripts/data");

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", { title: "Home", pageName: "Home Page" });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("about", {
    title: "About",
    pageName: "About Page",
    socialNetworksData,
  });
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render("projects", { title: "Projects", pageName: "Projects Page" });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("services", { title: "Services", pageName: "Services Page" });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("contact", {
    title: "Contact",
    subtitle: "Let's work together",
    pageName: "Contact page",
  });
};

module.exports.displayTermsAndConditions = (req, res, next) => {
  res.render("termsAndConditions", {
    title: "Terms and Conditions",
    subtitle: "Agreement on data policy",
    pageName: "Terms and Conditions",
  });
};
