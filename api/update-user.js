const express = require("express");
const Router = express.Router();
const verifyToken = require("../token/verifyToken");
const User = require("../model/user");
const validate_user_update = require("../validation/validate_update_user_profile");
const validate_user_update_password = require("../validation/validate_user_update_password");
const verifyPassword = require("../hash/comparePassword");
const hashpassword = require("../hash/hashPassword");

Router.post("/", verifyToken, async (req, res) => {
  console.log(req.body);
  const req_isvalid = validate_user_update(req.body);
  if (req_isvalid != true)
    return res.status(400).json({ error: true, errMessage: req_isvalid });
  try {
    const user = await User.findById(req.body.user);
    if (!user)
      return res.status(403).json({
        error: true,
        errMessage:
          "invalid request, please login again to update your profile information",
      });
    await user.set({
      // full_name: req.body.full_name,
      full_name: req.body.full_name,
      username: req.body.username,
      email: req.body.email,
    });
    await user.save();
    res.status(200).json({ error: false, message: "success" });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

Router.post("/update_password", verifyToken, async (req, res) => {
  console.log("password", req.body.password);
  console.log("new password", req.body.new_password);
  const req_isvalid = validate_user_update_password(req.body);
  if (req_isvalid != true)
    return res.status(400).json({ error: true, errMessage: req_isvalid });

  try {
    const user = await User.findById(req.body.user);
    if (!user)
      return res.status(403).json({
        error: true,
        errMessage:
          "invalid request, please login again to update your profile information",
      });
    console.log(user.password);
    const passwordIsverified = await verifyPassword(
      req.body.password,
      user.password,
    );
    console.log(passwordIsverified);
    if (passwordIsverified != true)
      return res.status(400).json({
        error: true,
        errMessage: "invalid password, please try again ",
      });
    const password = await hashpassword(req.body.new_password);
    console.log(password);
    await user.set({
      password: password,
    });
    await user.save();
    res.status(200).json({ error: false, message: "success." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;
