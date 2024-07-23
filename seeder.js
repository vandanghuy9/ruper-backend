import Product from "./models/Product.js";
import connectDB from "./config/db.js";
import productData from "./utils/productData.js";
import User from "./models/User.js";
import users from "./utils/userData.js";
connectDB();
const seedData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(productData);
    await User.deleteMany();
    await User.insertMany(users);
    console.log("data inserted successfully!");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
};
seedData();
