import {OAuth2Client} from 'google-auth-library'
import Apply from '../models/Apply.js';
import User from '../models/User.js';
const user=new OAuth2Client(process.env.GOOGLE_CLIENT_ID)


export const googleAuth = async (req, res) => {
    const {tokenId} =req.body

    if(!tokenId){
        return res.status(400).json({message: 'Missing token id'})
    }
    try{
        const ticket = await user.verifyIdToken({
            idToken:tokenId,
            audience:process.env.GOOGLE_CLIENT_ID,
        })

        const {email, name, picture} = ticket.getPayload()
        res.status(200).json({
            tokenId,
            email,
            name,
            picture
        })
    }catch(error){
        return res.status(400).json({message: 'Invalid token id'})
    }
};






export const fetchuserdata = async (req, res) => {
    try {
        // Fetch user using ID from token
        const user = await User.findById(req.user.id);

        // If user not found, return an error
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Return user data
        return res.status(200).json({
            id: user._id,
            email: user.email,
            name: user.name,
            phone: user.phone,
            profile_picture: user.profile_picture,
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const logout = (req, res) => {
    return res
    
        .clearCookie("i", {
            secure: true,
            httpOnly: true,
            sameSite: "none",
        })
        .clearCookie("user", {
            secure: true,
            httpOnly: false,
            sameSite: "none",
        })
        .status(200)
        .json({ message: "You're now logged out." });
};



export const checkAuth = (req, res) => {
    const authToken = req.cookies.i;
    if (authToken) {
    
      res.status(200).json({ isAuthenticated: true});
    } else {
      res.status(200).json({ isAuthenticated: false});
    }
  };
