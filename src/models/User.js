import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true
  }, // For Google login
  phone: {
    type: Number,
    unique: true,
    sparse: true,
    default: undefined
  },
  whatsappNumber:{
    type: Number
  },
  eventRegister:{
    type: Boolean,
    default: false
  },
  professionalEmail:{
    type: String,
  },
  Position:{
    type: String,
  },
  officeLocation:{
    type: String
  },
  brandName:{
    type: String
  },
  
  profile_picture: {
    type: String,
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

export default User;
