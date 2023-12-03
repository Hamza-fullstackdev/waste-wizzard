import User from "../models/user.model.js";
import errorHandler from "../utils/errorHandler.util.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name) return next(errorHandler(400, "Name is required"));
  if (!email) return next(errorHandler(400, "Email is required"));
  if (!password) return next(errorHandler(400, "Password is required"));

  const hashedPassword = await bcrypt.hashSync(password, 10);
  const user = new User({ name: name, email: email, password: hashedPassword });
  try {
    await user.save();
    res.send({
      success: true,
      status: 200,
      message: "User created Successfully",
    });
  } catch (error) {
    if(error.keyValue.email){
      next(errorHandler(400,"User with this email already exist"))
    }
    else{
      next(error)
    }
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) return next(errorHandler(400, "Email is required"));
  if (!password) return next(errorHandler(400, "Password is required"));
  try {
    const user = await User.findOne({ email });
    if (!user)
      return next(
        errorHandler(
          400,
          "User with this email does not exist, please provide the valid credentials to login"
        )
      );
    const decryptPassword = bcrypt.compareSync(password, user.password);
    if (!decryptPassword) return next(errorHandler(400, "Wrong Credentials"));
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
      const { password: pass, ...rest } = user._doc;
      const oneYear = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds
       const expirationDate = new Date(Date.now() + oneYear);
      res
        .cookie("access_token", token, {
          expires:expirationDate,
          httpOnly: true,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const isUserExist = await User.findOne({ email: req.body.email });
    if (isUserExist) {
      const token = jwt.sign({ id: isUserExist._id }, process.env.JWT_TOKEN);
      const { password: pass, ...rest } = isUserExist._doc;
      const oneYear = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds
       const expirationDate = new Date(Date.now() + oneYear);
      res
      .cookie("access_token", token, {
        expires:expirationDate,
        httpOnly: true
      })
      .status(200)
      .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: generatedPassword,
        avatar: req.body.avatar,
      });
      try {
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_TOKEN);
        const { password: pass, ...rest } = newUser._doc;
        const oneYear = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds
       const expirationDate = new Date(Date.now() + oneYear);
        res
        .cookie("access_token", token, {
          expires:expirationDate,
          httpOnly: true
        })
        .status(200)
        .json(rest);
      } catch (error) {
        next(error);
      }
    }
  } catch (error) {
    next(error);
  }
};
