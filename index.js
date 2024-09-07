// const express = require("express");
import express from "express";
// const cors = require("cors");
import cors from "cors";
// const helmet = require("helmet");
import helmet from "helmet";
// const productRoutes = require("./routes/productRoutes");
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
// require("dotenv").config();
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import wishListRouter from "./routes/wishListRoutes.js";
import { isAuth } from "./config/auth.js";
import blogRoutes from "./routes/blogRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(helmet());

app.use(cors());
app.use("/api/products", productRoutes);
app.use("/api/user", userRouter);
app.use("/api/blog", blogRoutes);
app.use("/api/wishlist", isAuth, wishListRouter);
app.use("/api/order", isAuth, orderRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
