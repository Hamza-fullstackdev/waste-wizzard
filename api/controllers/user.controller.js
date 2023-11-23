import errorHandler from "../utils/errorHandler.util.js"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs";

export const updateUser=async(req,res,next)=>{
    if(req.user.id !== req.params.id) return next(errorHandler(400,"You can change your own account only"));
    try {
        if(req.body.password){
            req.body.password=bcrypt.hashSync(req.body.password,10);
        }
        const updateUserData= await User.findByIdAndUpdate(req.params.id,{
            $set:{
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar,
            }
        },{new:true});
        const {password,...rest}=updateUserData._doc;
        res.status(200).json(rest);

    } catch (error) {
        next(error)
    }
}


export const getUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(errorHandler(403, "Unauthorized User"))
    try {
        const userData = await User.findById({ _id: req.params.id });
        if (userData) {
            const { password: pass, ...rest } = userData._doc;
            res.status(200).json(rest)
        } else {
            next(errorHandler(404, "No User Found"))
        }
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(errorHandler(403, "Unauthorized User"))
    try {
        const userData = await User.deleteOne({ _id: req.params.id });
        if (userData) {
            res.clearCookie("access_token").json({status:200 ,message:"You have Successfully deleted your account"})
        }
        else {
            next(errorHandler(404, "Error while deleting user"))
        }
    } catch (error) {
        next(error)
    }
}



