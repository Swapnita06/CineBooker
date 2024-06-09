import Admin from "../models/Admin.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const addAdmin = async(req,res,next)=>{
    const {email,password}= req.body;
    if(
        !email.trim()===""|| 
        !password || password.trim()===""
    )
{
    return res.status(422).json({message: "Invalid Inputs"});
}
    let existingAdmin;
    try{
        existingAdmin = await Admin.findOne({email});
        }catch(err){
            return console.log(err);
            }
            if(existingAdmin){
                return res.status(400).json({message:"Admin already exists"}
                );
                }

           let admin;
           const hashedPassword = bcrypt.hashSync(password);
           try{
            admin = new Admin({email,password:hashedPassword});
            admin = await admin.save();
            }catch(err){
                return console.log(err);
                }
                if(!admin){
                    return res.status(500).json({message:"Unable to add admin"}
                    );
                    }
              return res.status  (201).json({admin})
};


export const adminLogin = async(req,res,next)=>{

    const {email,password}= req.body;
    if(
        !email.trim()===""|| 
        !password || password.trim()===""
    )
{
    return res.status(422).json({message: "Invalid Inputs"});
}

let existingAdmin;
try{
    existingAdmin = await Admin.findOne({email});
    }catch(err){
        return console.log(err);
        }
        if(!existingAdmin){
            return res.status(400).json({message:"Admin does not exist"}
            );
            }
            const isPasswordCorrect = bcrypt.compareSync(password,existingAdmin.password);
            if(!isPasswordCorrect){
                return res.status(400).json({message:"Invalid Credentials"}
                );
                }
                
                const token = jwt.sign({id:existingAdmin._id},process.env.SECRET_KEY,{
                    expiresIn: "7d",
                });      
                
        return res.status(200).json({message:"Login Successful",token,id:existingAdmin._id});
                   
}

export const getAdmins = async(req,res,next)=>{
    let admins;
    try{
        admins = await Admin.find();
    }catch(err){
        return console.log(err);
    }
    if(!admins){
        return res.status(404).json({message:"No Admins Found"});
        }
        return res.status(200).json({admins});
}

// admin_controller.js

// Import necessary modules and Admin model

export const getAdminById = async (req, res) => {
    const adminId = req.params.adminId; // Extract adminId from request params
    try {
      // Find admin by ID in the database
      const admin = await Admin.findById(adminId);
      if (!admin) {
        // If admin is not found, return a 404 Not Found response
        return res.status(404).json({ message: "Admin not found" });
      }
      // If admin is found, return it in the response
      res.status(200).json({ admin });
    } catch (err) {
      // Handle any errors and return a 500 Internal Server Error response
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
