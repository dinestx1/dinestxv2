import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true only for 465
  auth: {
    user: process.env.SMTP_ADMINISTRATOR,
    pass: process.env.SMTP_ADMINISTRATOR_PASS,
  },
});

export default transporter;
