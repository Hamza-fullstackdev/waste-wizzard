import mongoose from 'mongoose';

const contactScheama= new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
},{timestamps: true});

const Contact= mongoose.model("Contact",contactScheama);
export default Contact;