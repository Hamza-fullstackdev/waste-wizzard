import mongoose from "mongoose";

const cartModel= new mongoose.Schema({
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
    firstAddress:{
        type:String,
        required:true
    },
    secondAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    postcode:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    products:{
        type:Array,
        required:true
    }
},{timestamps:true})

const Cart= mongoose.model("Cart",cartModel);
export default Cart;