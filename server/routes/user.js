let express = require("express");

let router = express.Router();

let mongoose = require("mongoose");

// connect to our schema
let User = require("../models/user");

/* GET route for the userlist page */
router.get("/", (req, res, next) => {
  User.find((err, userList) => {
    if (err) {
      return console.error(err);
    } else {
      // 'user is the view, and the rest is the object passed to the view'
      res.render("user/list", { title: "User", userList: userList });
      // console.log({userList})
    }
  });
});

/* GET route for displaying the Add page - Create operation*/
router.get("/add", (req, res, next) => {
  res.render("user/add", { title: "Add User" });
});
/* POST route for processing the Add page - Create operation*/
router.post("/add", (req, res, next) => {
  let newUser = User({
    email: req.body.email,
    password: req.body.password,
  });

  User.create(newUser, (err, User) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/user-list");
    }
  });
});

/* GET route for displaying the Edit page - Update operation*/
router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, userToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("user/edit", { title: "Edit user", user: userToEdit });
    }
  });
});
/* POST route for processing the Edit page - Update operation*/
router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;
  let updatedUser = User({
    _id: id,
    email: req.body.email,
    password: req.body.password,
  });

  User.updateOne({ _id: id }, updatedUser, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the user list
      console.log("User Updated!!!")
      res.redirect("/user-list");
    }
  });
});
/* GET to perform deletion - Delete operation*/
router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;
  User.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/user-list");
    }
  });
});

module.exports = router;
