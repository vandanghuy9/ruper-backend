import express from "express";
import {
  saveCustomerOrder,
  getCustomerOrder,
} from "../controller/orderController.js";
const orderRouter = express.Router();
orderRouter.get("/", getCustomerOrder);
orderRouter.post("/save", saveCustomerOrder);

export default orderRouter;
