let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// create a reference to the model
let userModel = require("../models/user");
let User = userModel.User; // alias

module.exports.displayUserList = (req, res, next) => {
  User.find((err, userList) => {
    if (err) {
      return console.error(err);
    } else {
      let orderedUserList = userList.sort((a,b) => {
        let name1 = a.displayName.toLowerCase()
        let name2 = b.displayName.toLowerCase()
        return name1.localeCompare(name2)
      })
      // 'user is the view, and the rest is the object passed to the view'
      res.render("user/list", {
        title: "User",
        userList: orderedUserList,
        displayName: req.user ? req.user.displayName : "",
      });
      // console.log({userList})
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("user/add", {
    title: "Add User",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.processAddPage = (req, res, next) => {
  let newUser = User({
    email: req.body.email,
    password: req.body.password,
  });

  User.create(newUser, (err, User) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/user-list", {
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, userToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("user/edit", {
        title: "Edit user",
        user: userToEdit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;
  let updatedUser = User({
    _id: id,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    displayName: req.body.displayName,
    username: req.body.username
  });

  User.updateOne({ _id: id }, updatedUser, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the user list
      console.log("User Updated!!!");
      res.redirect("/user-list");
    }
  });

  User.findById({_id:id}, (error, user) => {
    user.setPassword(req.body.password, err => console.log("Error updating", err))
  })
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  User.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/user-list");
    }
  });
};
