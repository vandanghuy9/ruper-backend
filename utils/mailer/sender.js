dotenv.config();
import dotenv from "dotenv";
import nodemailer from "nodemailer";
export const sendVerifyEmail = async (userInfo, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASSWORD,
    },
  });
  const body = {
    from: process.env.MAILER_EMAIL,
    to: userInfo.email,
    subject: "Verify your email",
    html:
      "<p>Please click " +
      `<a href="${process.env.STORE_URL}/user/verify/${userInfo.token}" target="blank">here</a>` +
      " to verify your email and login to Ruper" +
      "</p>",
  };
  transporter.verify((err, success) => {
    if (err) {
      throw Error(`Error happen when verify ${err.message}`);
    }
    console.log("Server is ready to take our messages");
  });
  transporter.sendMail(body, (error, data) => {
    if (error) {
      return res.status(403).send({
        message: `Error happen when sending email ${error.message}`,
      });
    } else {
      console.log("Sent success");
      return res
        .status(201)
        .send({ message: "Please check your email to verify your account!" });
    }
  });
};

export const sendPasswordRecoverEmail = async (userInfo, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASSWORD,
    },
  });
  const body = {
    from: process.env.MAILER_EMAIL,
    to: userInfo.email,
    subject: "Verify your email",
    html:
      "<p>Please click " +
      `<a href="${process.env.STORE_URL}/forgot-password/${userInfo.token}" target="blank">here</a>` +
      " to recover your <strong>Ruper</strong> account password" +
      "</p>",
  };
  transporter.verify((err, success) => {
    if (err) {
      throw Error(`Error happen when verify ${err.message}`);
    }
    console.log("Server is ready to take our messages");
  });
  transporter.sendMail(body, (error, data) => {
    if (error) {
      return res.status(403).send({
        message: `Error happen when sending email ${error.message}`,
      });
    } else {
      console.log("Sent success");
      return res
        .status(201)
        .send({ message: "Please check your email to verify your account!" });
    }
  });
};
