import express from "express";
import {
  saveCustomerOrder,
  getCustomerOrder,
  getOrderById,
} from "../controller/orderController.js";
const orderRouter = express.Router();
orderRouter.get("/", getCustomerOrder);
orderRouter.get("/:_id", getOrderById);
orderRouter.post("/save", saveCustomerOrder);

export default orderRouter;
