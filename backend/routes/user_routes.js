import express from 'express';
import { deleteUser, getAllUsers,  getUserById,  login, signup, updateUser } from '../controllers/user_controller.js';
import { getBookingOfUser } from '../controllers/booking_controller.js';


const userRouter = express.Router();

userRouter.get("/",getAllUsers); 
userRouter.post("/signup",signup);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
userRouter.post("/login",login)
userRouter.get("/bookings/:id",getBookingOfUser)
userRouter.get("/:id", getUserById);

export default userRouter;