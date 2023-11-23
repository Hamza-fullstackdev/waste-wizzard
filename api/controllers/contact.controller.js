import Contact from "../models/contact.model.js";
import errorHandler from "../utils/errorHandler.util.js";

export const addContact = async (req, res, next) => {
    const { fname, lname, email, service, phone, message } = req.body;
    if (!fname) return next(errorHandler(400, "First name is required"));
    if (!lname) return next(errorHandler(400, "Last name is required"));
    if (!service) return next(errorHandler(400, "Please choose service"));
    if (!phone) return next(errorHandler(400, "Phone number is required"));
    if (!email) return next(errorHandler(400, "Email is required"));
    if (!message) return next(errorHandler(400, "Please enter message"));
    
    const contactData= new Contact({fname,lname,email,phone,service,message});
    try {
        await contactData.save();
        console.log(contactData)
        res.send({
            success: true,
            status: 200,
            message: "Message send successfully",
          });
    } catch (error) {
        next(error)
    }
}