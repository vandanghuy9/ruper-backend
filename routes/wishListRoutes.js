import express from "express";
import {
  getWishListByUserId,
  addProductToWishList,
  removeProductFromWishList,
} from "../controller/userController.js";
const wishListRouter = express.Router();
wishListRouter.get("/", getWishListByUserId);
wishListRouter.post("/add", addProductToWishList);
wishListRouter.post("/delete", removeProductFromWishList);
export default wishListRouter;
