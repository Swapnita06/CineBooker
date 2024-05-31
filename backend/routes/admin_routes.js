import express from 'express';
import { addAdmin, adminLogin } from '../controllers/admin_controller.js';

const adminRouter = express.Router();

adminRouter.post("/signup",addAdmin);
adminRouter.post("/login",adminLogin);


export default adminRouter;