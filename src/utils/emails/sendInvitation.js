import { sendMail } from "../sendMail.js";

const sendInvitationEmail = async ({
  email,
  username,
  eventName,
  inviteLink,
}) => {
  return sendMail({
    to: email,
    subject: `Invitation to ${eventName}`,
    html: `<!DOCTYPE html>
    <html lang="en">
    <body style="margin:0; padding:0; background-color:#0b1220;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0b1220; padding:20px 0;">
      <tr>
        <td align="center">

          <!-- Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#0f172a; border-radius:14px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.45);">

            <!-- Header -->
            <tr>
              <td style="padding:40px 30px; text-align:center; background:linear-gradient(135deg,#1e40af,#2563eb);">
                <h1 style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:28px; font-weight:800; color:#ffffff;">
                  Founders Meetup
                </h1>
                <p style="margin:12px 0 0; font-family:Arial,Helvetica,sans-serif; font-size:16px; color:#e0e7ff;">
                  Your Event Pass Is Confirmed
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:35px 30px; font-family:Arial,Helvetica,sans-serif; color:#e5e7eb; font-size:16px; line-height:1.7;">

                <p style="margin:0 0 18px;">
                  Dear ${username},
                </p>

                <p style="margin:0 0 18px;">
                  We are pleased to confirm your participation in the
                  <strong style="color:#ffffff;">Founders Meetup</strong>—an exclusive
                  gathering curated for meaningful conversations, strategic networking,
                  and founder-led growth.
                </p>

                <!-- CTA -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin:30px 0;">
                  <tr>
                    <td align="center">
                      <a href="http://dinestx.com/ticket" target="_blank"
                         style="display:inline-block; padding:14px 34px; background-color:#2563eb; color:#ffffff;
                                font-size:16px; font-weight:700; text-decoration:none;
                                border-radius:10px; letter-spacing:0.6px;">
                        Download Event Pass
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Event Details Card -->
                <table width="100%" cellpadding="0" cellspacing="0"
                       style="background-color:#020617; border-radius:12px; padding:22px;">
                  <tr>
                    <td style="font-size:18px; font-weight:700; color:#93c5fd; padding-bottom:14px;">
                      Event Details
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:10px;">
                      <span style="color:#9ca3af; width:130px; display:inline-block;">Date</span>
                      <span style="color:#ffffff; font-weight:600;">21st December 2025</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:10px;">
                      <span style="color:#9ca3af; width:130px; display:inline-block;">Time</span>
                      <span style="color:#ffffff; font-weight:600;">03:30 PM onwards</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:10px;">
                      <span style="color:#9ca3af; width:130px; display:inline-block;">Reporting</span>
                      <span style="color:#ffffff; font-weight:600;">03:00 PM</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:10px;">
                      <span style="color:#9ca3af; width:130px; display:inline-block;">Venue</span>
                      <span style="color:#ffffff; font-weight:600;">
                        goSTOPS, Baani Square, Sector 51, Gurugram
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:10px;">
                      <span style="color:#9ca3af; width:130px; display:inline-block;">Location</span>
                      <a href="https://maps.app.goo.gl/RrriHhtrsBAdHcRF7" target="_blank"
                         style="color:#60a5fa; font-weight:600; text-decoration:none;">
                        View on Google Maps
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="color:#9ca3af; width:130px; display:inline-block;">Community</span>
                      <a href="https://chat.whatsapp.com/JZEYRGKU0zg5v7EgI6PIxm" target="_blank"
                         style="color:#60a5fa; font-weight:600; text-decoration:none;">
                        Join WhatsApp Group
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Signature -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:35px;">
                  <tr>
                    <td style="border-top:1px solid #1f2937; padding-top:20px; font-size:15px;">
                      <p style="margin:0 0 6px;">Warm regards,</p>
                      <p style="margin:0; font-weight:700; color:#ffffff;">
                        Founders Meetup Team
                      </p>
                      <p style="margin:6px 0 0; font-size:14px; color:#9ca3af;">
                        Sakshi Srivastava |
                        <a href="tel:+919450655732" style="color:#93c5fd; text-decoration:none;">+91 94506 55732</a> |
                        <a href="mailto:sakshi@collabify.sbs" style="color:#93c5fd; text-decoration:none;">sakshi@collabify.sbs</a>
                      </p>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#020617; padding:28px 20px; text-align:center;">
                <p style="margin:0 0 8px; font-size:16px; font-weight:700; color:#ffffff;">
                  Share the Moment
                </p>
                <p style="margin:0 0 16px; font-size:14px; color:#9ca3af;">
                  Post your event pass and tag us on LinkedIn
                </p>

                <a href="https://www.linkedin.com/company/collabify-growth/"
                   target="_blank"
                   style="color:#60a5fa; font-weight:600; font-size:14px; margin:0 8px; text-decoration:none;">
                  Collabify Growth Lab
                </a>
                |
                <a href="https://www.linkedin.com/company/idea2impactconnect/"
                   target="_blank"
                   style="color:#60a5fa; font-weight:600; font-size:14px; margin:0 8px; text-decoration:none;">
                  Idea2Impact
                </a>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

    </body>
    </html>
    `,
  });
};

export default sendInvitationEmail;
