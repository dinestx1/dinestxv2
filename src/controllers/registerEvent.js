import User from '../models/User.js';


export const registerEvent = async (req, res) => {
    const user = req.user;
    const {name, whatsappNumber, professionalEmail, position, location} = req.body;


    if(!user){
        console.log("User not found")
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            {
              eventRegister: true,
              name,
              whatsappNumber,
              professionalEmail,
              Position: position,
              officeLocation: location,
            },
            { new: true, runValidators: true }
          );

          if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
          }

          return res.status(200).json({
            message: "User registered successfully",
            user: updatedUser,
          });
        return res
            .status(201)
            .json({message: "User registered successful", user: userUpdate});

    } catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
