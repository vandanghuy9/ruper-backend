import express from "express";
import {
  getShowProducts,
  getProductById,
  getRelatedProducts,
  getProductsByCategory,
  getFeatureProducts,
} from "../controller/productController.js";
const router = express.Router();
router.get("/show", getShowProducts);

router.get("/filter", getProductsByCategory);
router.get("/feature", getFeatureProducts);
router.get("/:_id", getProductById);

router.get("/related/:_id", getRelatedProducts);

export default router;
