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
    console.log();
    const order = new Order({
      user: user._id,
      cart: cart,
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
    handleSaveProductQuantity(cart);
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
  const shippingOptionList = [
    {
      label: "Free shipping",
      value: "free_shipping",
      fee: 0,
    },
    {
      label: "Flat rate",
      value: "flat_rate",
      fee: 20,
    },
  ];
  const chosenOption = shippingOptionList.find(
    (item) => item.value === shippingOption
  );
  return chosenOption.fee;
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

const getOrderById = async (req, res) => {
  try {
    const { _id } = req.params;
    const order = await Order.findById(_id).lean();
    if (!order) {
      return res.status(403).send({ message: "Can't find your order" });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export { saveCustomerOrder, getCustomerOrder, getOrderById };
