import Coupon from "../models/Coupon.js";
const getCouponByCode = async (req, res) => {
  try {
    const { code } = req.params;
    console.log(code);
    const coupon = await Coupon.findOne({ code }).lean();
    console.log(coupon);
    if (coupon) return res.status(200).json(coupon);
    return res.status(403).send({ message: "Can't find coupon code" });
  } catch (error) {
    return res.status(500).json({
      message: e.message,
    });
  }
};
const getAllCoupon = async (req, res) => {
  try {
    const couponList = await Coupon.find({}).lean();
    return res.status(200).send(couponList);
  } catch (error) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

export { getAllCoupon, getCouponByCode };
