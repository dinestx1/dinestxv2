export const googleLoginCallback = (req, res) => {
  try {
    const user = req.user; // Populated by Passport
    const token = user.token; // Token generated in passportConfig

    // User data (consistent with manual login)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      profile_picture: user.profile_picture,
      isVerified: user.isVerified,
    };

    // Set cookies (consistent with manual login)
    res
      .cookie("i", token, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 48, // 48 hours
      })
      .cookie("user", JSON.stringify(userData), {
        secure: true,
        httpOnly: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 48,
      });

    // Redirect to frontend
    res.redirect(process.env.FRONTEND_URL); // Adjust to your frontend URL
  } catch (error) {
    console.error("Google Callback Error:", error);
    res.status(500).json({ message: "Google login failed." });
  }
};