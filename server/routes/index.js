var express = require("express");
var router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET About page. */
router.get("/about", indexController.displayAboutPage);

/* GET Product page. */
router.get("/projects", indexController.displayProjectsPage);

/* GET Services page. */
router.get("/services", indexController.displayServicesPage);

/* GET Contact us page. */
router.get("/contact", indexController.displayContactPage);

/* GET Terms and Conditions page. */
router.get("/terms-and-conditions", indexController.displayTermsAndConditions);

// commented to test new user routes
// router.get("*", function(req, res) {
//   res.render('error', {title: "Bad redirection", error: "404", message: "Redirection error =(", errorStatus: 404, errorStack: "=)"});
// })

module.exports = router;
