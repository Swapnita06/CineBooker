import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from "./routes/user_routes.js";
import adminRouter from "./routes/admin_routes.js";
import movieRouter from "./routes/movie_routes.js";
import bookingsRouter from "./routes/booking_routes.js";
dotenv.config();
const app= express();

app.use(cors());
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter)
app.use("/booking",bookingsRouter)

mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.j6rlymu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
)
.then(()=>app.listen(5000,()=>
    console.log("connected to database and server is running")
)
).catch(e=> console.log(e));
 

 //zGZ2YsFsn78WMa7P