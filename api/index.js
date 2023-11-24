import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
// import path from 'path';

import authRoute from "./routes/auth.route.js";
import userRoute from './routes/user.route.js';
import contactRoute from './routes/contact.route.js';
import productRoute from './routes/product.route.js';
import cartRoute from './routes/cart.route.js';

const app=express();
const PORT= process.env.PORT||8000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to Database")
}).catch((error)=>{
    console.log("Error connected to Database",error)
})

app.use(cors({
    credentials:true,
    origin:"https://waste-wizzard-frontend.vercel.app"
}));
app.use(express.json())
app.use(cookieParser())

app.use("/api/route",authRoute);
app.use("/api/user",userRoute);
app.use('/api/contact',contactRoute);
app.use('/api/product',productRoute);
app.use('/api/cart',cartRoute);

// const __dirname=path.resolve();
// app.use(express.static(path.join(__dirname, '/client/dist')))

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'client', 'dist', 'index.html'));
// });

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    const message= err.message || "Internal Server Error";
    res.status(statusCode).send({
        success: false,
        statusCode,
        message
    })
})
app.listen(PORT,()=>{
    console.log(`App is running at PORT ${PORT}`);
})
