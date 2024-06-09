import express from 'express';
import { addAdmin, adminLogin, getAdminById, getAdmins } from '../controllers/admin_controller.js';

const adminRouter = express.Router();

adminRouter.post("/signup",addAdmin);
adminRouter.post("/login",adminLogin);
adminRouter.get("/",getAdmins);
adminRouter.get("/:adminId", getAdminById);

export default adminRouter;