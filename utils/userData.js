import bcrypt from "bcryptjs";
const { hashSync } = bcrypt;
const users = [
  {
    name: "Richard E. Romero",
    email: "richard@gmail.com",
    password: hashSync("12345678"),
    billingAddress: {
      country: "Vietnam",
      address: "16 Chinh Kinh Street",
      city: "Hanoi",
      state: "",
      apartment: "",
    },
    shippingAddress: {
      country: "Vietnam",
      address: "16 Chinh Kinh Street",
      city: "Hanoi",
      state: "",
      apartment: "",
    },
  },
  {
    name: "Brain H. Landry",
    email: "brain@gmail.com",
    password: hashSync("12345678"),
    billingAddress: {
      country: "Vietnam",
      address: "16 Chinh Kinh Street",
      city: "Hanoi",
      state: "",
      apartment: "",
    },
    shippingAddress: {
      country: "Vietnam",
      address: "16 Chinh Kinh Street",
      city: "Hanoi",
      state: "",
      apartment: "",
    },
  },
  {
    name: "Thomas",
    email: "thomas@gmail.com",
    password: hashSync("12345678"),
    billingAddress: {
      country: "Vietnam",
      address: "16 Chinh Kinh Street",
      city: "Hanoi",
      state: "",
      apartment: "",
    },
    shippingAddress: {
      country: "Vietnam",
      address: "16 Chinh Kinh Street",
      city: "Hanoi",
      state: "",
      apartment: "",
    },
  },
  {
    name: "Van Dang Huy",
    email: "vandanghuy9@gmail.com",
    password: hashSync("12345678"),
    billingAddress: {
      country: "Vietnam",
      address: "16 Chinh Kinh Street",
      city: "Hanoi",
      state: "",
      apartment: "",
    },
    shippingAddress: {
      country: "Vietnam",
      address: "16 Chinh Kinh Street",
      city: "Hanoi",
      state: "",
      apartment: "",
    },
  },
];
export default users;
