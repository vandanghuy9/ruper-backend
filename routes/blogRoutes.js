import express from "express";
import {
  getShowBlogs,
  getBlogById,
  getBlogByCategory,
  getAllBlogCategory,
  getAllBlogTag,
  saveBlogComment,
} from "../controller/blogController.js";
const router = express.Router();
router.get("/show", getShowBlogs);
router.get("/filter", getBlogByCategory);
router.get("/categories", getAllBlogCategory);
router.get("/tags", getAllBlogTag);
router.post("/comments/:_id", saveBlogComment);
router.get("/:_id", getBlogById);

export default router;
