var express = require("express");
var socialNetworksData = require("../../public/javascripts/data");
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
  res.render("projects", { title: "Projects", pageName: "Projects Page" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services", pageName: "Services page" });
});

/* GET Contact us page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact", subtitle: "Let's work together", pageName: "Contact page",  });
});

/* GET Terms and Conditions page. */
router.get("/terms-and-conditions", function (req, res, next) {
  res.render("termsAndConditions", { title: "Terms and Conditions", subtitle: "Agreement on data policy", pageName: "Terms and Conditions",  });
});

// commented to test new user routes
// router.get("*", function(req, res) {
//   res.render('error', {title: "Bad redirection", error: "404", message: "Redirection error =(", errorStatus: 404, errorStack: "=)"});
// })

module.exports = router;
