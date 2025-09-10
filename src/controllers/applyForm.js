import Apply from "../models/Apply.js";


//apply form
export const applyData = async (req,res)=>{
    const {name,email,phoneNumber,profession,role,portfolioLink,githubLink}=req.body;
    try{
            const existingApplication = await Apply.findOne({ userId: req.user.id });
    if (existingApplication) {
      return res.status(400).json({ message: "You have already applied!" });
    }

        const newApply=new Apply({
            userId: req.user.id,name,email,phoneNumber,profession,role,portfolioLink,githubLink
        });
    

    await newApply.save()
    res.status(201).json({message: 'Application submitted successfully'})
}catch(error){
    return res.status(400).json({message: 'Failed to submit application'})
}
}
