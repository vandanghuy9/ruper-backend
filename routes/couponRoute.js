import express from "express";
import {
  getAllCoupon,
  getCouponByCode,
} from "../controller/couponController.js";
const router = express.Router();
router.get("/all", getAllCoupon);
router.get("/:code", getCouponByCode);

export default router;
