import USER from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
const signature = process.env.SECRET_JWT_SIGNATURE;

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await USER.findOne({ email, password });
    if (!user?._id) {
      return res
        .status(400)
        .send({ success: false, msg: "Invalid username or password" });
    }
    const token = jwt.sign({ user_id: user._id.toString() }, signature, {
      expiresIn: "12h",
    });
    res.send({ success: true, token });
  } catch (error) {
    res.status(500).send({ success: false, msg: "Something went wrong" });
    console.log("error", error);
  }
}
