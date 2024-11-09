import Order from "../models/Order.js";
import Product from "../models/Product.js";
import dotenv from "dotenv";
import Stripe from "stripe";
const stripe = new Stripe(`${process.env.SECRET_STRIPE_KEY}`);
dotenv.config();
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
      discountValue,
      discountType,
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
      total:
        discountValue === 0
          ? subTotal + shippingCost
          : discountType === "percentage"
          ? subTotal - subTotal * discountValue + shippingCost
          : subTotal - discountValue + shippingCost,
      shippingCost,
      shippingOption,
      paymentMethod,
      status: "Pending",
      discount: 0,
    });
    if (discountType) {
      order.discount =
        discountType.toLowerCase() === "percentage" ? subTotal * discountValue : discountValue;
    }
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

const handleCardPayment = async (req, res) => {
  try {
    const {
      cart,
      subTotal,
      userInfo,
      orderNote,
      shippingOption,
      paymentMethod,
      isShippingSelected,
      discountValue,
      discountType,
    } = req.body;
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

    const items = cart.map((item) => ({
      price_data: {
        currency: `${process.env.CURRENCY}`,
        product_data: {
          name: item.name,
          metadata: {
            id: item.id,
            productID: item.productID,
            image: item.image,
            color: item.color,
            size: item.size,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    const metadata = {
      orderNote,
      billingName: `${billingFirstName} ${billingLastName}`,
      billingCompanyName: billingInfo.companyName,
      billingCountry: billingInfo.country,
      billingAddress: billingInfo.address,
      billingApartment: billingInfo.apartment,
      billingCity: billingInfo.city,
      billingState: billingInfo.state,
      billingZipCode: billingInfo.zipCode,
      billingContact: billingInfo.contact,
      billingEmail: billingInfo.email,
      shippingName: `${shippingFirstName} ${shippingLastName}`,
      shippingCompanyName: shippingInfo.companyName,
      shippingCountry: shippingInfo.country,
      shippingAddress: shippingInfo.address,
      shippingApartment: shippingInfo.apartment,
      shippingCity: shippingInfo.city,
      shippingState: shippingInfo.state,
      shippingZipCode: shippingInfo.zipCode,
      shippingContact: shippingInfo.contact,
      shippingEmail: shippingInfo.email,
      shippingOption,
      isShippingSelected,
      discountValue,
      discountType,
    };
    const session = await stripe.checkout.sessions.create({
      line_items: items,
      metadata,
      mode: "payment",
      success_url: `${process.env.STORE_URL}/checkout?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.STORE_URL}/checkout?canceled=true`,
    });
    return res.status(200).send(session);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

const saveCardPaymentOrder = async (req, res) => {
  try {
    const { sessionId } = req.body;
    if (!sessionId) {
      return res.status(400).json({
        message: "Invalid payment",
      });
    }
    const user = req.user;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
      expand: ["data.price.product"],
    });
    const { metadata } = session;
    const cart = lineItems.data.map((item) => ({
      id: item.price.product.metadata?.id,
      productID: item.price.product.metadata?.productID,
      color: item.price.product.metadata?.color,
      size: item.price.product.metadata?.size,
      image: item.price.product.metadata?.image,
      name: item.description,
      price: item.price.unit_amount / 100,
      quantity: item.quantity,
      itemTotal: item.amount_total / 100,
    }));
    const discountValue = session.metadata?.discountValue;
    const discountType = session.metadata?.discountType;
    const orderNote = session.metadata?.orderNote;
    const subTotal = session.amount_subtotal / 100;
    const shippingOption = session.metadata?.shippingOption;
    const shippingCost = calculateShippingFee(subTotal, shippingOption);
    const billingAddress = {
      name: `${session.metadata?.billingName}`,
      address: session.metadata?.billingAddress,
      apartment: session.metadata?.billingApartment,
      city: session.metadata?.billingCity,
      companyName: session.metadata?.billingCompanyName,
      contact: session.metadata?.billingContact,
      country: session.metadata?.billingCountry,
      email: session.metadata?.billingEmail,
      state: session.metadata?.billingState,
      zipCode: session.metadata?.billingZipCode,
    };
    const isShippingSelected = session.metadata?.isShippingSelected;
    const order = new Order({
      user: user._id,
      cart,
      userInfo: {
        billingAddress,
      },
      orderNote,
      subTotal,
      total:
        discountValue === 0
          ? subTotal + shippingCost
          : discountType === "percentage"
          ? subTotal - subTotal * discountValue + shippingCost
          : subTotal - discountValue + shippingCost,
      shippingCost,
      shippingOption,
      discount:
        discountType.toLowerCase() === "percentage" ? subTotal * discountValue : discountValue,
      paymentMethod: "card",
      status: "Pending",
    });
    if (isShippingSelected) {
      const shippingAddress = {
        name: `${session.metadata?.shippingName}`,
        address: session.metadata?.shippingAddress,
        apartment: session.metadata?.shippingApartment,
        city: session.metadata?.shippingCity,
        companyName: session.metadata?.shippingCompanyName,
        contact: session.metadata?.shippingContact,
        country: session.metadata?.shippingCountry,
        email: session.metadata?.shippingEmail,
        state: session.metadata?.shippingState,
        zipCode: session.metadata?.shippingZipCode,
      };
      order.userInfo.shippingAddress = shippingAddress;
    }
    await order.save();
    handleSaveProductQuantity(cart);
    return res.status(201).json({ success: true, message: "Saved order successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
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
  const chosenOption = shippingOptionList.find((item) => item.value === shippingOption);
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
export {
  saveCustomerOrder,
  getCustomerOrder,
  getOrderById,
  handleCardPayment,
  saveCardPaymentOrder,
};
