import mongoose from "mongoose"

const applySchema= new mongoose.Schema({
      userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // Reference to User model
    required: true
  },
    name:{type:String,required:true},
    email:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    profession:{type:String,required:true},
    role:{type:String,required:true},
    portfolioLink:{type:String,required:true},
    githubLink:{type:String,required:true}
    
})

const Apply=mongoose.model('Apply',applySchema);
export default Apply;