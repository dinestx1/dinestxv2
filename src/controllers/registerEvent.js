import User from '../models/User.js';
import sendWelcome from '../utils/emails/welcomeEmail.js';
import sendInvitationEmail from '../utils/emails/sendInvitation.js'


export const registerEvent = async (req, res) => {
    const user = req.user;
    const {name, whatsappNumber,brandName,professionalEmail, position, officeLocation} = req.body;


    if(!user){
        console.log("User not found")
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            {
              eventRegister: true,
              name: name,
              whatsappNumber: whatsappNumber,
              brandName: brandName  ,
              professionalEmail:professionalEmail,
              Position: position,
              officeLocation: officeLocation,
            },
            { new: true, runValidators: true }
          )
          try {
            await sendInvitationEmail({ email: user.email, username: user.name });
            console.log("Welcome email sent to:", user.email);
          } catch (mailError) {
            console.error("Failed to send welcome email:", mailError);
          }


          if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
          }
          return res.status(200).json({
            message: "Thank you for your interest. Your event pass has been sent to your registered email address. Please check your inbox.",
            user: updatedUser,
          })

    } catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
