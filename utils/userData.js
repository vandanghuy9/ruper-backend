import bcrypt from "bcryptjs";
const { hashSync } = bcrypt;
const users = [
  {
    name: "Richard E. Romero",
    email: "richard@gmail.com",
    password: hashSync("12345678"),
  },
  {
    name: "Brain H. Landry",
    email: "brain@gmail.com",
    password: hashSync("12345678"),
  },
  {
    name: "Thomas",
    email: "thomas@gmail.com",
    password: hashSync("12345678"),
  },
  {
    name: "Van Dang Huy",
    email: "vandanghuy9@gmail.com",
    password: hashSync("12345678"),
  },
];
export default users;
