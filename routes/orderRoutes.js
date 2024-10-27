import express from "express";
import {
  saveCustomerOrder,
  getCustomerOrder,
  getOrderById,
  handleCardPayment,
  saveCardPaymentOrder,
} from "../controller/orderController.js";
const orderRouter = express.Router();
orderRouter.get("/", getCustomerOrder);
orderRouter.get("/:_id", getOrderById);
orderRouter.post("/save", saveCustomerOrder);
orderRouter.post("/card_payment", handleCardPayment);
orderRouter.post("/save_card_payment", saveCardPaymentOrder);
export default orderRouter;
