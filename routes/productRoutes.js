import express from "express";
import {
  getShowProducts,
  getProductById,
  getRelatedProducts,
  getProductsByCategory,
  getFeatureProducts,
  getCompareProducts,
  saveProductReviews,
} from "../controller/productController.js";
const router = express.Router();
router.get("/show", getShowProducts);

router.get("/filter", getProductsByCategory);
router.get("/feature", getFeatureProducts);
router.get("/compare", getCompareProducts);
router.get("/:_id", getProductById);

router.get("/related/:_id", getRelatedProducts);
router.post("/reviews", saveProductReviews);
export default router;
