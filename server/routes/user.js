let express = require("express");

let router = express.Router();

let mongoose = require("mongoose");
let passport = require("passport");

// helper function for guard purposes
function requireAuth(req, res, next) {
  console.log({auth: req.isAuthenticated()})
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

let userController = require("../controllers/user");

/* GET route for the userlist page */
router.get("/", userController.displayUserList);

/* GET route for displaying the Add page - Create operation*/
router.get("/add", requireAuth, userController.displayAddPage);

/* POST route for processing the Add page - Create operation*/
router.post("/add", requireAuth, userController.processAddPage);

/* GET route for displaying the Edit page - Update operation*/
router.get("/edit/:id", requireAuth, userController.displayEditPage);
/* POST route for processing the Edit page - Update operation*/
router.post("/edit/:id", requireAuth, userController.processEditPage);
/* GET to perform deletion - Delete operation*/
router.get("/delete/:id", requireAuth, userController.performDelete);

module.exports = router;
