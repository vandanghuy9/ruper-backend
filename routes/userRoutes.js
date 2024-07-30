import express from "express";
import { login, getWishListByUserId } from "../controller/userController.js";
const userRouter = express.Router();
userRouter.post("/login", login);
export default userRouter;
