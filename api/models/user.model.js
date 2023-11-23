import mongoose from "mongoose";

const userModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
        required:true
    },
    avatar:{
        type:String,
        default:"https://png.pngtree.com/png-clipart/20190921/original/pngtree-user-avatar-boy-png-image_4693645.jpg"
    }
},{timestamps:true})

const User= mongoose.model("User",userModel);
export default User;