import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const app= express();

mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.j6rlymu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then(()=>app.listen(5000,()=>
    console.log("connected to database and server is running")
)
).catch(e=> console.log(e));
 

 //zGZ2YsFsn78WMa7P