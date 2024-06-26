import User from "../models/User.js";
import bcrypt from "bcryptjs";


export const getAllUsers = async(req,res,next)=>{
    let users;
    try{
        users = await User.find();
    }
    catch(err){
        return console.log(err);
    }

    if(!users){
        return res.status(500).json({message:"Unexpected Error Occured"});
    }

    return res.status(200).json({users});
}

export const signup= async(req,res,next)=>{
    const { name, email,password}= req.body;
    if(
        !name|| 
        name.trim()===""|| 
        !email.trim()===""|| 
        !password || password.trim()===""
    )
{
    return res.status(422).json({message: "Invalid Inputs"});
}

const hashedPassword = bcrypt.hashSync(password);

let user;
try{

    user = new User({name, email,password: hashedPassword});
    user = await user.save();

}
catch(err){
    return console.log(err);
}
if(!user){
    return res.status(500).json({message:"Unexpected Error Occured"});
}
 return res.status(201).json({id:user._id});
    };

    export const updateUser = async(req,res,next)=>{
        const id = req.params.id;
        const { name, email,password}= req.body;
        if(!name|| name.trim()===""|| !email.trim()===""|| !password || password.trim()==="")
    {
        return res.status(422).json({message: "Invalid Inputs"});
    }

    
    const hashedPassword = bcrypt.hashSync(password);

    let user;
    try{
        user = await User.findByIdAndUpdate(id,{name,email,password:hashedPassword});
    }catch(err){
return console.log(err);
    }
    if(!user){
        return res.status(500).json({message:"Unexpected Error Occured"});
        }
        return res.status(200).json({message:"Updated Successfully"});
};

export const deleteUser= async(req,res,next)=>{
    const id = req.params.id;
    let user;
    try{
        user = await User.findByIdAndDelete(id);
        }catch(err){
            return console.log(err);
            }
            if(!user){
                return res.status(500).json({message:"Unexpected Error Occured"});
                }
                return res.status(200).json({message:"Deleted Successfully"});
};


export const login = async(req,res,next)=>{
    const {email,password}= req.body;
    if(!email.trim()===""|| !password || password.trim()==="")
        {
            return res.status(422).json({message: "Invalid Inputs"});
            }

            let existingUser;
          try{
            existingUser = await User.findOne({email});
}  
catch(err){
    return console.log(err);
    }

    if(!existingUser){
        return res.status(400).json({message:"User not Found"});
        }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Invalid Credentials"});
        }
        return res.status(200).json({message:"Login Successful", user: existingUser});
}

// export const getUserDetails = async (req, res, next) => {
//     const userId = req.params.id;
  
//     try {
//       const user = await User.findById(userId);
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
//       return res.status(200).json({ user });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ message: "Unexpected error occurred" });
//     }
//   };

export const getUserById = async(req,res,next)=>{
    const id = req.params.id;
    let user;
    try{
        user = await User.findById(id);
    }
    catch(err){
        return console.log(err);
    }

    if(!user){
        return res.status(500).json({message:"Unexpected Error Occured"});
    }

    return res.status(200).json({user});
}