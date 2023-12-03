import Cart from '../models/cart.model.js';
import errorHandler from '../utils/errorHandler.util.js'
export const addToCart=async(req,res,next)=>{
    const {fname,lname,email,phone,firstAddress,city,country,postcode,description,date,time,products}=req.body;
    if(!fname) return next(errorHandler(404,"First name is required"));
    if(!lname) return next(errorHandler(404,"Last name is required"));
    if(!email) return next(errorHandler(404,"Email is required"));
    if(!phone) return next(errorHandler(404,"Phone number is required"));
    if(!country) return next(errorHandler(404,"Country field is required"));
    if(!firstAddress) return next(errorHandler(404,"First address is required"));
    if(!postcode) return next(errorHandler(404,"Postcode field is required"));
    if(!city) return next(errorHandler(404,"City field is required"));
    if(!date) return next(errorHandler(404,"Please select date"));
    if(!products) return next(errorHandler(500,"Unable to fetch product details"));
    if(!time) return next(errorHandler(404,"Please select time"));
    if(!description) return next(errorHandler(404,"Please enter the description for waste"));

    try {
        const cartData= await Cart.create(req.body)
        return res.status(201).json(cartData);
    } catch (error) {
        next(error)
    }
}


export const getCartData=async(req,res,next)=>{
    try {
        const getData= await Cart.find({userId:req.params.id});
        if(getData){
            res.status(200).json(getData);
        }else{
            next(404,"Your Cart is empty")
        }
    } catch (error) {
        next(error)
    }
}

export const deleteProduct=async(req,res,next)=>{
    try {
        const deleteData= await Cart.findByIdAndDelete(req.params.id)
        if(deleteData){
            res.send({status:200,message:'Product successfully deleted from the Cart'})
        }else{
            next(errorHandler(404,"Error deleted product"))
        }
    } catch (error) {
        
    }
}