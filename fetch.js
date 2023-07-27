// // const fetch = require("isomorphic-fetch");
// // const fetch_user = async (user_form) => {
// //   const formdata = new FormData();
// //   formdata.append("first_name", user_form.first_name);
// //   try {
// //     const response = await fetch("http://localhost:3000/api/user/register", {
// //       method: "POST",
// //       // headers:{"content-type":"application/json"},
// //       // body:JSON.stringify(user_form)
// //       body: formdata,
// //     });
// //     const result = await response.json();
// //     console.log(result);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };

// // fetch_user({ first_name: "firstname" });

// // const {
// //   create_mail_options,
// //   transporter,
// // } = require("./mailer/reg_success_mail");

// // const callmailer=async()=>{
// //   first_name = "nsam";
// //   last_name = "chidera";
// //   account_type = "savings account";
// //   account_number = "35636829298278";
// //   account_pin = 2002;
// //   const result = await sendEmail({
// //     first_name,
// //     last_name,
// //     account_type,
// //     account_number,
// //     account_pin,
// //   });
// //   console.log(result);
// // }
// // callmailer()

// // let account_number=Math.random(2553633.37333)
// // console.log(Math.ceil(account_number))
// // let account_number = Math.floor(Math.random() * 11000000000);
// // console.log(account_number);
// // let token =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI0ZDRlYjAwZGNkMzEyODZkY2YyOWVmIiwiaWF0IjoxNjQ5MzIwMjA4fQ.J8OMVS9ZbLaWQfxf0WqygcgMRg28ys1OjSVHW53MeuE";

// // const fetch = require("isomorphic-fetch");
// // const fetch_user = async (user_form) => {
// //   try {
// //     const response = await fetch(
// //       "http://localhost:3000/api/user/transaction/complete",
// //       {
// //         method: "POST",
// //         headers: { "content-type": "application/json" },
// //         body: JSON.stringify(user_form),
// //       }
// //     );
// //     const result = await response.json();
// //     console.log(result);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // fetch_user({
// //   token,
// //   user: "62523139f9e62082fa19191f",
// //   otp: "10704",
// // });

// // fetch_user({
// //   token,
// //   user: "62523139f9e62082fa19191f",
// //   account_number: "7167883745",
// //   amount: 200,
// //   description: "transfer used for tea payment2",
// //   // loan_amount: "2500",
// //   // loan_type: "car loan",
// //   // duration: "57",
// //   // loan_details: "first loan",
// // });
// //   let otp = Math.floor(Math.random() * 11000);
// // console.log(otp)

// // var os = require("os");

// // var networkInterfaces = os.networkInterfaces();

// // console.log(networkInterfaces);

// // let currentdate = new Date();
// // let datetime = `${currentdate.getDate()}/${
// //   currentdate.getMonth() + 1
// // }/${currentdate.getFullYear()} @ ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// // let currentdate = new Date();
// // let datetime = `${currentdate.getFullYear()}-${
// //   currentdate.getMonth() + 1
// // }-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// const hashpassword = require("./admin-hash/hashPassword");
// const Admin = require("./model/admin");
// const create_admin = async (user_name, password) => {
//   const hashed_password = await hashpassword(password);
//   const admin = await new Admin({
//     user_name,
//     password: hashed_password,
//   });
//   const result = await admin.save();
//   console.log(result);
// };
// create_admin("support@sterileenergy.uk", "sterileenergy1@1");

// // const User = require("./model/user");
// // const fetch_user = async () => {
// //   let user = await User.findById("627d8dfe2d38e80d22eaf2c8");
// //   if (!user) console.log("no user with that id");
// //   console.log(user);
// //   // let result = await user.set({ final_balance: 10000 });
// //   // await result.save();
// //   // console.log(result);
// // };
// // fetch_user();

// // let currentdate = new Date();
// // currentdate.setDate(currentdate.getDate() + 7);

// // let datetime = `${currentdate.getFullYear()}-${
// //   currentdate.getMonth() + 1
// // }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// // console.log(datetime);
// // var currentdate = new Date();
// // var datetime =
// //   currentdate.getDate() +
// //   "/" +
// //   (currentdate.getMonth() + 1) +
// //   "/" +
// //   currentdate.getFullYear() +
// //   " @ " +
// //   currentdate.getHours() +
// //   ":" +
// //   currentdate.getMinutes() +
// //   ":" +
// //   currentdate.getSeconds();

// // var date = new Date();

// // add a day
// let date = new Date();
// date.setDate(date.getDate() + 1);
// let end_date = date.getTime();

// let up_date = new Date();
// up_date.setDate(up_date.getDate());
// let today = up_date.getTime();

// console.log(end_date <= today);
// console.log(today);
// console.log(end_date);
// // var d1 = new Date();
// // var d2 = new Date();
// // d2.setDate(currentdate.getDate() + 7);
// // var same = d1.getTime() === d2.getTime();
// // var notSame = d1.getTime() >= d2.getTime();

// const nodemailer = require("nodemailer");

// const smtpTransport = require("nodemailer-smtp-transport");

// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.panteramining.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@panteramining.com",
//       pass: "panteramining1@1",
//     },
//   }),
// );

// let create_mail_options = (userInfo) => {
//   return (mailOptions = {
//     from: "support@panteramining.com",
//     // from:"michelleannschlloser@outlook.com",
//     to: userInfo.reciever,
//     subject: `Account Registration Notification`,
//     //   text:"just wanna know if this works",
//     html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link
//   href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
//   rel="stylesheet"
// />
// <div
//   class="maincontainer"
//   style="
//     font-family: 'Nunito', sans-serif;
//     font-family: 'Roboto', sans-serif;
//     background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
//     width: 100%;
//     background-size: cover;
//   "
// >
//   <div class="head-txt">
//     <h1 style="text-align: center; font-size: 16px; color: #825ee4">
//       PANTERAMINING
//     </h1>
//     <h3 style="font-size: 15px">NEW ACCOUNT NOTIFICATION</h3>
//   </div>

//   <p class="sm-p">
//     Dear ${userInfo.first_name} ${userInfo.last_name}, Thank you so much for
//     allowing us to help you with your account opening. We are committed to
//     providing our customers with the highest level of service and the most
//     innovative investment and trading that are possible. We are very glad you
//     chose us. We hope you will take advantage of our wide variety of investment
//     and trading which are designed to meet your needs
//   </p>
//   <p class="sm-p">
//     You have recieved $500 USD registration bonus which has been deposited to
//     your account. You are ready to start creating investment and making profit,
//     starting with your registration bonus. You can withdraw your registration
//     bonus after completing our human verification
//   </p>
//   <p class="sm-p">
//     For more detailed informations, please contact our customer support or the
//     relationship officer that would be assigned to you shortly
//   </p>

//   <p class="sm-p">
//     incase you have any questions do not hesitate to contact us and we will
//     reach out to you as soon as possible
//   </p>
//   <br />
//   <h1
//     style="
//       font-size: 18px;
//       text-align: center;
//       background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%);
//       color: #fff;
//     "
//   >
//     PANTERAMINING.COM
//   </h1>
//   <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
//     Disclaimer: this message was automatically generated via pantera mining
//     secured channel,please do not reply to this message all correspondence
//     should be addressed to panteramining.com or your relationship officer
//   </p>
// </div>

//  `,
//   });
// };
// module.exports = { create_mail_options, transporter };
// // transporter.sendMail(mailOptions, (err, info) => {
// //   if (err)
// //     return res
// //       .status(400)
// //       .json({ error: true, errMessage: `an error occured: ${err.message}` });
// //   // console.log(info)
// //   return res.status(200).json({ error: false, message: "message sent" });
// //   // console.log("message sent",info)
// // });

// // //   if (err)
// // //     return { error: true, errMessage: `an error occured: ${err.message}` };
// // //   // console.log(info)
// // //   return { error: false, message: "message sent" };
// // // });
// // };

// const nodemailer = require("nodemailer");
// const smtpTransport = require("nodemailer-smtp-transport");

// require("dotenv").config();
// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   secure: false,
//   // host: "smtp.gmail.com",
//   // port: 465,
//   // ignoreTLS: false,
//   // secure: false,
//   // host: "smtp.gmail.com",
//   // port: 465,
//   // secure: false,
//   auth: {
//     user: process.env.company_mail,
//     pass: process.env.mail_password,
//   },
// });

// // const transporter = nodemailer.createTransport(
// //   smtpTransport({
// //     host: "mail.benefitsgloballtd.com",
// //     secureConnection: false,
// //     tls: {
// //       rejectUnauthorized: false,
// //     },
// //     port: 465,
// //     auth: {
// //       user: "support@benefitsgloballtd.com",
// //       pass: "benefitsgloballtd1@1",
// //     },
// //   }),
// // );

// let create_mail_options = (userInfo) => {
//   return (mailOptions = {
//     from: process.env.mail,
//     // from:"michelleannschlloser@outlook.com",
//     to: userInfo.reciever,
//     subject: `Account Registration Notification`,
//     //   text:"just wanna know if this works",
//     html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link
//   href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
//   rel="stylesheet"
// />
// <div
//   class="maincontainer"
//   style="
//     font-family: 'Nunito', sans-serif;
//     font-family: 'Roboto', sans-serif;
//     background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
//     width: 100%;
//     background-size: cover;
//   "
// >
//   <div class="head-txt">
//     <h1 style="text-align: center; font-size: 16px; color:rgb(26, 115, 232)">
//      Sterile Energy
//     </h1>
//     <h3 style="font-size: 15px">NEW ACCOUNT NOTIFICATION</h3>
//   </div>

//   <p class="sm-p">
//     Dear ${userInfo.first_name} ${userInfo.last_name}, Thank you so much for
//     allowing us to help you with your account opening. We are committed to
//     providing our customers with the highest level of service and the most
//     innovative investment and trading that are possible. We are very glad you
//     chose us. We hope you will take advantage of our wide variety of investment
//     and trading which are designed to meet your needs
//   </p>
//   <p class="sm-p">
//    You are ready to start creating investment and making profit. For more detailed informations, please contact our customer support or your
//     relationship officer
//   </p>

//   <p class="sm-p">
//     incase you have any questions do not hesitate to contact us and we will
//     reach out to you as soon as possible
//   </p>
//   <br />
//   <h1
//     style="
//       font-size: 18px;
//       text-align: center;
//       background:rgb(26, 115, 232);
//       color:#fff ;
//     "
//   >
//    Sterile Energy
//   </h1>
//   <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
//     Disclaimer: this message was automatically generated via sterileenergy
//     secured channel,please do not reply to this message all correspondence
//     should be addressed to sterileenergy.uk or your relationship officer
//   </p>
// </div>

//  `,
//   });
// };
// module.exports = { create_mail_options, transporter };

// transporter.sendMail(
//   create_mail_options({
//     first_name: "chidera",
//     last_name: "Nweke",
//     reciever: "enwofe2020@gmail.com",
//   }),
//   (err, info) => {
//     if (err) return console.log(err.message);
//     console.log(info);
//     // return res.status(400).json({
//     //   error: true,
//     //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
//     // });
//   },
// );
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

const User = require("./model/user");
const users = [
  // {
  //   email: "gurjaryashpratap@gmail.com",
  //   phone_number: "63877 59883",
  //   country: "India",
  //   final_balance: 10,
  //   profit_loss: 0,
  //   active_investment: 0,
  //   referral_bonus: 0,
  //   referral_link: "https://momentumgloballtd.com?gurjaryashpratap@gmail.com",
  //   has_made_deposit: false,
  //   referral: "null",
  //   first_name: "Yash gurjar",
  //   last_name: "6387759883",
  //   passport:
  //     "https://res.cloudinary.com/wisbankinstitute/image/upload/v1686905014/passport/dfynrzlsizjlbuzeojrj.jpg",
  //   password: "$2b$10$d1gBBvdcT/QeUqxYrndvVecC0tE3yXdNzck7qccMC.Tg4l4pfzclm",
  // },
  // {
  //   email: "ps6610944@gmail.com",
  //   phone_number: "9821722469",
  //   country: "India",
  //   final_balance: 10,
  //   profit_loss: 0,
  //   active_investment: 0,
  //   referral_bonus: 0,
  //   referral_link: "https://momentumgloballtd.com?ps6610944@gmail.com",
  //   has_made_deposit: false,
  //   referral: "null",
  //   first_name: "Prateek ",
  //   last_name: " Singh",
  //   passport:
  //     "https://res.cloudinary.com/wisbankinstitute/image/upload/v1687074200/passport/lrfugsos2z88zisq7mfv.jpg",
  //   password: "$2b$10$rMRLYLxY7Lj4aYrnpSAHBe3OkzcShV1lJMU0v8d8feAmQdeaQEyLy",
  // },
  // {
  //   email: "shaikhaman0907@gmail.com",
  //   phone_number: "9067860971",
  //   country: "India",
  //   final_balance: 10,
  //   profit_loss: 0,
  //   active_investment: 0,
  //   referral_bonus: 0,
  //   referral_link: "https://momentumgloballtd.com?shaikhaman0907@gmail.com",
  //   has_made_deposit: false,
  //   referral: "null",
  //   first_name: "Aman ",
  //   last_name: "shaikh",
  //   passport:
  //     "https://res.cloudinary.com/wisbankinstitute/image/upload/v1686933741/passport/eqa3ig6mfeglrzkfrvbr.jpg",
  //   password: "$2b$10$1UBkZqbW20VUYpm9EnOvdeBrwo3RpiZP8bT0mUYEsK7eAds9lkLqy",
  // },

  // {
  //   email: "Rashidkuruka@gmqil.com",
  //   phone_number: "9961962822",
  //   country: "India",
  //   final_balance: 10,
  //   profit_loss: 0,
  //   active_investment: 0,
  //   referral_bonus: 0,
  //   referral_link: "https://momentumgloballtd.com?Rashidkuruka@gmqil.com",
  //   has_made_deposit: false,
  //   referral: "null",
  //   first_name: "Rashid ",
  //   last_name: "cc",
  //   passport:
  //     "https://res.cloudinary.com/wisbankinstitute/image/upload/v1687088615/passport/v8yjbpfetwujnztve7g6.jpg",
  //   password: "$2b$10$DVGTEsmmteWvp2PWiyzMP.JCMuw2l/bD4lvxQEB5K1qMNl/qZYvXG",
  // },

{ 
email:"gulfambjr@gmail.com",
phone_number:"7037732928",
country:"India",
final_balance:10,
profit_loss:0,
active_investment:0,
referral_bonus:0,
referral_link:"https://momentumgloballtd.com?gulfambjr@gmail.com",
has_made_deposit:false,
referral:"null",
}
];

const creatNeweUser = async (user) => {
  const newuser = await new User({
    email: user.email,
    phone_number: user.phone_number,
    country: user.country,
    first_name: user.first_name,
    last_name: user.last_name,
    passport: user.passport,
    password: user.password,
    final_balance: user.final_balance,
    profit_loss: user.profit_loss,
    active_investment: user.active_investment,
    referral_bonus: user.referral_bonus,
    referral_link: user.referral_link,
    has_made_deposit: user.has_made_deposit,
    referral: user.referral,
  });

  const user_ = await newuser.save();
  console.log(user_);
};

const run = async () => {
  users.forEach(async (user) => {
    await creatNeweUser(user);
  });

  // const createuser = await createUser();
  // console.log(createuser);
};

run();
