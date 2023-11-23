import Product from "../models/product.model.js";
import errorHandler from "../utils/errorHandler.util.js";

export const addProduct=async(req,res,next)=>{
    const {name,price,image,category}=req.body;
    if(!name) return next(errorHandler(404,"Name is required"));
    if(!price) return next(errorHandler(404,"Price is required"));
    if(!image) return next(errorHandler(404,"Image is required"));
    if(!category) return next(errorHandler(404,"Please select category"));
    try {
        const newProduct= await Product.create(req.body);
        return res.status(201).json(newProduct);
    } catch (error) {
        next(error)
    }
}

export const getProducts=async(req,res,next)=>{
    try {
        const products= await Product.find({category:req.params.category})
        if(products.length===0){
            next(errorHandler(403,"Product doesnot exist"))
        }else{
            res.status(200).json(products);
        }
    } catch (error) {
        next(error)
    }
}

export const getProduct=async(req,res,next)=>{
    try {
        const product= await Product.findById(req.params.id)
        if(product){
            res.status(200).json(product);
        }
        else{
            next(errorHandler(403,"Error fetching product details"))
        }
    } catch (error) {
        next(error)
    }
}