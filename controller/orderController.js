import Order from "../models/Order.js";
import Product from "../models/Product.js";
const saveCustomerOrder = async (req, res) => {
  try {
    const {
      cart,
      subTotal,
      userInfo,
      orderNote,
      shippingOption,
      paymentMethod,
      isShippingSelected,
    } = req.body;
    const user = req.user;
    const cartItems = cart?.map((item) => ({
      productId: item?.id,
      stockId: item.productId,
      quantity: item.quantity,
    }));
    const {
      firstName: billingFirstName,
      lastName: billingLastName,
      ...billingInfo
    } = userInfo.billingAddress;
    const {
      firstName: shippingFirstName,
      lastName: shippingLastName,
      ...shippingInfo
    } = userInfo.shippingAddress;
    const shippingCost = calculateShippingFee(subTotal, shippingOption);
    const order = new Order({
      user: user._id,
      cart: cartItems,
      userInfo: {
        billingAddress: {
          name: `${billingFirstName} ${billingLastName}`,
          ...billingInfo,
        },
      },
      orderNote,
      subTotal,
      total: subTotal + shippingCost,
      shippingCost,
      shippingOption,
      paymentMethod,
      status: "Pending",
    });
    if (isShippingSelected) {
      order.userInfo.shippingAddress = {
        name: `${shippingFirstName} ${shippingLastName}`,
        ...shippingInfo,
      };
    }
    await order.save();
    handleSaveProductQuantity(cartItems);
    return res.status(201).json({ message: "Saved order successfully" });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
const getCustomerOrder = async (req, res) => {
  try {
    const user = req.user._id;
    const orders = await Order.find({
      user,
    });
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
const calculateShippingFee = (subTotal, shippingOption) => {
  return subTotal * 0.2;
};

const handleSaveProductQuantity = async (cartItems) => {
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    const product = await Product.findOneAndUpdate(
      {
        _id: item.productId,
        "stocks._id": item.stockId,
      },
      {
        $inc: { "stocks.$.quantity": -item.quantity },
      },
      {
        new: true,
      }
    );
  }
};
export { saveCustomerOrder, getCustomerOrder };
