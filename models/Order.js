import mongoose, { Schema, model } from "mongoose";

import AutoIncrement from "mongoose-sequence";
const autoIncrement = AutoIncrement(mongoose);
const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,

      ref: "User",

      required: true,
    },

    invoice: {
      type: Number,

      required: false,
    },

    cart: [{}],

    userInfo: {
      billingAddress: {
        name: {
          type: String,
          required: false,
        },
        companyName: {
          type: String,
          required: false,
        },
        country: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        apartment: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        state: {
          type: String,
          required: true,
        },
        zipCode: {
          type: String,
          required: true,
        },
        contact: {
          type: String,
          required: false,
        },
        email: {
          type: String,
          required: false,
        },
      },
      shippingAddress: {
        name: {
          type: String,
          required: false,
        },
        companyName: {
          type: String,
          required: false,
        },
        country: {
          type: String,
          required: false,
        },
        address: {
          type: String,
          required: false,
        },
        apartment: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        state: {
          type: String,
          required: false,
        },
        zipCode: {
          type: String,
          required: false,
        },
        contact: {
          type: String,

          required: false,
        },
        email: {
          type: String,
          required: false,
        },
      },
    },
    orderNote: {
      type: String,
      required: false,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    shippingCost: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
    },
    shippingOption: {
      type: String,
      required: false,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    cardInfo: {
      type: Object,
      required: false,
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Delivered", "Cancel"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = model(
  "Order",

  orderSchema.plugin(autoIncrement, {
    inc_field: "invoice",
    start_seq: 1,
  })
);

export default Order;
