import 'dotenv/config';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import  sendWelcome  from "../utils/emails/welcomeEmail.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists with Google ID
        let user = await User.findOne({ googleId: profile.id });
        console.log("Existing Google user:", user);

        if (!user) {
          // Check if email exists in regular account
          const existingUser = await User.findOne({ email: profile.emails[0].value });

          if (existingUser) {
            // Merge accounts if email exists
            existingUser.googleId = profile.id;
            existingUser.profile_picture = profile.photos[0].value || existingUser.profile_picture;
            user = await existingUser.save();
          } else {
            // Create new user
            user = await User.create({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
              phone: undefined,
              profile_picture: profile.photos[0].value,
              isVerified: true, // Google-verified emails
            });
          }
        }

        // Generate JWT token (consistent with your login function)
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: '7d' }
        );

        // Attach token to user object for the callback handler
        user.token = token;
        return done(null, user);
      } catch (error) {
        console.error("Google Auth Error:", error);
        return done(error, null);
      }
    }
  )
);

// // Serialize user to session
// passport.serializeUser((user, done) => done(null, user.id));

// // Deserialize user from session
// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });

export default passport;
