var express = require("express");
var socialNetworksData = require("../public/javascripts/data");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", pageName: "Home Page" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home", pageName: "Home Page" });
});

/* GET About page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About", pageName: "About Page", socialNetworksData });
});

/* GET Product page. */
router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Projects", pageName: "Projects Page" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services", pageName: "Services page" });
});

/* GET Contact us page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact", pageName: "Contact page" });
});

module.exports = router;
