const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

require("dotenv").config();
let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

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

let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Withdrawal Confirmation Notification`,
    //   text:"just wanna know if this works",
    html: `
<link rel="preconnect" href="https://fonts.googleapis.com" />
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
  "
>
  <div class="maincontainer"  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  ">
    
      <h3 style="font-size: 15px; color:#041d9b">WITHDRAWAL REQUEST WAS SUCCESSFULLY INITIATED</h3>
    </div>

    <p class="sm-p">
      Dear ${userInfo.full_name}, you have successfully
      initiated a withdrawal of $${userInfo.amount} from
      your account on <b>${datetime}</b>. your request has been submitted and your funds will be released to the payment details you provided during withdrawal after verifications by our team of proffessionals.
    </p>
    <p class="sm-p">
      NB: For more detailed informations, please contact our customer support or
      your relationship officer
    </p>

   
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
      secured channel,please do not reply to this message. All correspondence
      should be addressed multi-financialglobe.com or your relationship officer
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
//       .status(400)rgb(26, 115, 232)
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
