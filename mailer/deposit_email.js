const nodemailer = require("nodemailer");
require("dotenv").config();
const smtpTransport = require("nodemailer-smtp-transport");

// const transporter = nodemailer.createTransport(
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
let transporter = nodemailer.createTransport({
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
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `DEPOSIT REQUEST NOTIFICATION`,
    //   text:"just wanna know if this works",
    html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main
  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  ">
  <div class="maincontainer" style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  ">
    <div class="head-txt">
  
      <h3 style="font-size: 15px; color:#041d9b">DEPOSIT REQUEST NOTIFICATION</h3>
    </div>

    <p class="sm-p">
       Dear ${userInfo.full_name}, we have recieved a deposit 
     request you made on <b>${datetime}</b>.
    However your request need to undergo a human verification to make sure the deposit was sent correctly,and yor fund will be made available to your account as soon as possible
    </p>
    <p class="sm-p">
      NB: For more detailed informations, please contact our customer support or
      your relationship officer
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
     Mult-FinancialGlobe
    </h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via multi-financialglobe
      secured channel, all correspondence
      should be addressed to multi-financialglobe.com or your relationship officer
    </p>
  </div>
</main>
 `,
  });
};
module.exports = { create_mail_options, transporter };
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
