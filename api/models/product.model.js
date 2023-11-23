import mongoose from "mongoose";

const productModel= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type: String,
        required:true
    }
},{timestamps:true})

const Product= mongoose.model("Product",productModel);
export default Product