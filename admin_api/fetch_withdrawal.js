const express = require("express");
const Router = express.Router();
const verifyToken = require("../secure-admin-api/verifyToken");
const Withdrawal_request = require("../model/withdrawal_request");
const Transaction = require("../model/transaction");
const Admin = require("../model/admin");
const User = require("../model/user");

const {
  create_mail_options,
  transporter,
} = require("../mailer/withdrawal_approval_mail");

const {
  create_mail_options2,
  transporter2,
} = require("../mailer/withdrawal_failure_mail");

const validate_admin_fetchuser = require("../validation/validate-admin-fetchuser");
const validate_admin_delete_withdrawal = require("../validation/validate-admin-delete-withdrawal");
Router.post("/", verifyToken, async (req, res) => {
  const request_isvalid = validate_admin_fetchuser(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });

  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });
    const withdrawal = await Withdrawal_request.find().populate("user");
    if (withdrawal.length < 1)
      return res.status(400).json({
        error: true,
        errMessage: "No one has initiated a withdraw transaction at the moment",
      });
    res.status(200).json({ error: false, message: withdrawal });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

Router.post("/withdrawal/approve", verifyToken, async (req, res) => {
  const request_isvalid = validate_admin_delete_withdrawal(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });

  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });

    const withdrawal_request = await Withdrawal_request.findById(
      req.body.withdrawal_request,
    );

    if (!withdrawal_request)
      return res.status(400).json({
        error: true,
        errMessage:
          "The withdrawal request you wanted to approve was not found ",
      });

    const user = await User.findById(withdrawal_request.user);
    const transaction = await Transaction.findById(
      withdrawal_request.transaction_id,
    );
    if (!transaction)
      return res.status(400).json({
        error: true,
        errMessage:
          "The withdrawal request you wanted to approve is not associated with a transaction ",
      });

    // await transaction.save();

    if (user) {
      transporter.sendMail(
        create_mail_options({
          first_name: user.first_name,
          last_name: user.last_name,
          reciever: user.email,
          withdrawal_amount: transaction.debit,
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
    }
    transaction.set({
      status: "success",
    });
        await transaction.save();

    await Withdrawal_request.findByIdAndDelete(req.body.withdrawal_request);

    res.status(200).json({ error: false, message: transaction });
    // const admin = await Admin.findById(req.body.admin);
    // if (!admin)
    //   return res.status(403).json({
    //     error: true,
    //     errMessage: "Forbidden!, please login again to access this api",
    //   });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

Router.post("/withdrawal/delete", verifyToken, async (req, res) => {
  const request_isvalid = validate_admin_delete_withdrawal(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });

  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });
    const withdrawal_request = await Withdrawal_request.findById(
      req.body.withdrawal_request,
    );
    if (!withdrawal_request)
      return res.status({
        error: true,
        errMessage:
          "The Withdrawal request you tried to approve does not exist",
      });

    const user = await User.findById(withdrawal_request.user);
    const transaction = await Transaction.findById(
      withdrawal_request.transaction_id,
    );
    if (!transaction)
      return res.status(400).json({
        error: true,
        errMessage:
          "The withdrawal request you wanted to approve is not associated with a transaction ",
      });

    // await transaction.save();

    if (user) {
      user.set({
        final_balance:
          user.final_balance + parseInt(withdrawal_request.withdrawal_amount),
      });
      await user.save();

      transporter2.sendMail(
        create_mail_options2({
          first_name: user.first_name,
          last_name: user.last_name,
          reciever: user.email,
          withdrawal_amount: transaction.debit,
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
    }

    transaction.set({
      status: "failed",
    });
        await transaction.save();

    await Withdrawal_request.findByIdAndDelete(req.body.withdrawal_request);

    res.status(200).json({
      error: false,
      message: "you successfully failed a withdrawal request",
    });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

module.exports = Router;
