import { newBooking } from "../controllers/booking_controller.js";
import express from 'express';

const bookingsRouter = express.Router();

bookingsRouter.post('/',newBooking);
export default bookingsRouter