let express = require("express");

let router = express.Router();

let mongoose = require("mongoose");

// connect to our schema
let User = require("../models/user");

let userController = require("../controllers/user");

/* GET route for the userlist page */
router.get("/", userController.displayUserList);

/* GET route for displaying the Add page - Create operation*/
router.get("/add", userController.displayAddPage);

/* POST route for processing the Add page - Create operation*/
router.post("/add", userController.processAddPage);

/* GET route for displaying the Edit page - Update operation*/
router.get("/edit/:id", userController.displayEditPage);
/* POST route for processing the Edit page - Update operation*/
router.post("/edit/:id", userController.processEditPage);
/* GET to perform deletion - Delete operation*/
router.get("/delete/:id", userController.performDelete);

module.exports = router;
