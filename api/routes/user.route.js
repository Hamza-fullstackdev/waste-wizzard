import express from "express"
import verifyUser from "../utils/verifyUser.util.js"
import { deleteUser, getUser, updateUser } from "../controllers/user.controller.js";
const router= express.Router();

router.get('/get-user/:id',verifyUser,getUser);
router.post('/update-user/:id',verifyUser,updateUser);
router.delete('/delete-user/:id',verifyUser,deleteUser);
export default router