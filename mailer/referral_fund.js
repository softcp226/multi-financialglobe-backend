const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

// const transporter2 = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.benefitsgloballtd.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 465,
//     auth: {
//       user: "support@benefitsgloballtd.com",
//       pass: "benefitsgloballtd1@1",
//     },
//   }),
// );

require("dotenv").config();
let transporter2 = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;

let create_mail_options2 = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `REFERRAL BONUS CONFIRMATION NOTIFICATION`,
    //   text:"just wanna know if this works",
    html: `
  <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main    style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  "
>

  <div class="maincontainer">
    <div class="head-txt">
    
      <h3 style="font-size: 15px; color: #041d9b">REFERRAL BONUS CONFIRMATION NOTIFICATION</h3>
    </div>

    <p class="sm-p">
      Dear ${userInfo.full_name}, a user that registerd using your referral link just made a deposit and you have recieved 5% referral bonus
     which amounts to ${userInfo.referral_amount} on <b>${datetime}</b>.

    </p>
    <p class="sm-p">
   Your 5% referral bonus has been added to your balance and also reflected on your referral bonus section
    </p>
    
    <p class="sm-p">
      incase you have any questions do not hesitate to contact us and we will
      reach out to you as soon as possible
    </p>
    <br />
    <h1
      style="
      font-size: 18px;
        text-align: center;
        background: #041d9b;
        color: #fff;
        border-radius:10px;
        padding:5px
      "
    >
   Multi-FinancialGlobe
    </h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via Multi-FinancialGlobe
      secured channel,please do not reply to this message all correspondence
      should be addressed to multi-financialglobe.com or your relationship officer
    </p>
  </div>
</main>

 `,
  });
};
module.exports = { create_mail_options2, transporter2 };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
