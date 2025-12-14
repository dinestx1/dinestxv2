import transporter from "../config/mail.config.js";

export const sendMail = async ({
  to,
  subject,
  html,
  text,
}) => {
  return transporter.sendMail({
    from: `"Founders Meetup" <${process.env.SMTP_ADMINISTRATOR}>`,
    to,
    subject,
    text,
    html,
  });
};
