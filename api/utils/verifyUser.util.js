import jwt from "jsonwebtoken";
import errorHandler from "./errorHandler.util.js"
const verityUser=(req,res,next)=>{
    const isCookieExist=req.cookies.access_token;
    console.log(isCookieExist)
    if(!isCookieExist) return next(errorHandler(401,"Unauthorized"));
    
    jwt.verify(isCookieExist,"waste-wizzard",(err,user)=>{
        console.log("Requset user are :");
        if(err){
            next(errorHandler(403,"Forbidden"))
        }
        req.user=user;
        next();
    })

}

export default verityUser;

