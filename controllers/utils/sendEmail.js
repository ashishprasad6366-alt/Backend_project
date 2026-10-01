import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (email, subject, message) => {
// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: message, // html body
  });
};

export default sendEmail;