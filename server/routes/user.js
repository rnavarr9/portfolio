/**
 * File name      : user.js
 * Student’s Name : Renzo Navarro
 * StudentID      : 301183749
 * Date           : 10/21/2021
 */

let express = require("express");

let router = express.Router();

let mongoose = require("mongoose");
let passport = require("passport");

// helper function for guard purposes
function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

let userController = require("../controllers/user");

/* GET route for the userlist page */
router.get("/", userController.displayUserList);
/* GET route for displaying the Edit page - Update operation*/
router.get("/edit/:id", requireAuth, userController.displayEditPage);
/* POST route for processing the Edit page - Update operation*/
router.post("/edit/:id", requireAuth, userController.processEditPage);
/* GET route for displaying the Change Password page - Update operation*/
router.get("/changePassword/:id", requireAuth, userController.displayChangePasswordPage);
/* POST route for processing the Change Password page - Update operation*/
router.post("/changePassword/:id", requireAuth, userController.processChangePassword);
/* GET to perform deletion - Delete operation*/
router.get("/delete/:id", requireAuth, userController.performDelete);
module.exports = router;
