const express = require("express");
const Router = express.Router();
const User = require("../model/user");
const verifyToken = require("../token/verifyToken");
// const cloudinary = require("../file_handler/cloudinary");
// const upload = require("../file_handler/multer");
// const fs = require("fs");
const { create_mail_options, transporter } = require("../mailer/deposit_email");
const validate_user = require("../validation/validate_complete_deposit");
const Deposit_request = require("../model/deposit_request");

Router.post("/", verifyToken, async (req, res) => {
  // console.log(req.body);

  const request_isvalid = validate_user(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });
  try {
    const user = await User.findById(req.body.user);
    if (!user)
      return res.status(400).json({
        error: true,
        errMessage:
          "an unexpected error occured, please login again to submit receipt",
      });

    const deposit_request_result = await Deposit_request.findOne({
      user: req.body.user,
      _id: req.body.deposit_request_id,
    });
    if (!deposit_request_result)
      return res.status(404).json({
        error: true,
        errMessage:
          "deposit not found,before you submit a receipt you need to first make a deposit ",
      });

    const result = deposit_request_result.set({
      transaction_hash: req.body.transaction_hash,
    });
    await result.save();

    transporter.sendMail(
      create_mail_options({
        full_name: user.full_name,
        reciever: user.email,
      }),
      (err, info) => {
        if (err) return console.log(err.message);
        console.log(info);
        // return res.status(400).json({
        //   error: true,
        //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
        // });
      },
    );

    res
      .status(200)
      .json({
        error: false,
        message: "successfully transaction hash successfully.",
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;
