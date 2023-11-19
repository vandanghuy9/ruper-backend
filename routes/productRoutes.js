import express from "express";
import {
  getShowProducts,
  getProductById,
} from "../controller/productController.js";
const router = express.Router();
router.get("/show", getShowProducts);

router.get("/:_id", getProductById);

export default router;
