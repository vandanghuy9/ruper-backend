import Product from "../models/Product.js";

const getShowProducts = async (req, res) => {
  try {
    const products = await Product.find(
      {},
      "name productClass imageUrl price discount parent children"
    );
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id);
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getRelatedProducts = async (req, res) => {
  try {
    const products = await Product.find(
      {},
      "name productClass imageUrl price discount parent children"
    );
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const category = req.query.category;
    const products = await Product.find(
      { parent: category },
      "name productClass imageUrl price discount parent children"
    );
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};
export { getShowProducts, getProductById, getRelatedProducts, getProductsByCategory };
