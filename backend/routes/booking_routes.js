import { deleteBooking, getBookingsById, newBooking } from "../controllers/booking_controller.js";
import express from 'express';

const bookingsRouter = express.Router();

bookingsRouter.get("/:id",getBookingsById)
bookingsRouter.post('/',newBooking);
bookingsRouter.delete("/:id",deleteBooking)
export default bookingsRouter