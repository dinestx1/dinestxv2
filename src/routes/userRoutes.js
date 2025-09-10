import express from 'express';
import passport from "passport";
import { googleAuth} from '../controllers/userControllers.js'
import { applyData } from '../controllers/applyForm.js';
import { googleLoginCallback } from '../controllers/googleLogin.js';
import {protect} from '../middleware/authMiddleware.js'
import { logout,fetchuserdata,checkAuth} from '../controllers/userControllers.js';
import "../config/passport.js"
import { getUserAppointments,bookAppointment } from '../controllers/bookAppointment.js';
const router=express.Router()


router.post('/apply',protect,applyData)
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect:process.env.FRONTEND_URL,session: false }),
    googleLoginCallback
  );

router.get('/me',protect,fetchuserdata);
router.get("/check-auth",checkAuth)
router.post("/logout",logout);



router.post("/book", protect, bookAppointment);       // Book appointment
router.get("/get-bookings", protect, getUserAppointments);  
export default router