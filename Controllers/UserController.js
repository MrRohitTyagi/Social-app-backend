import USER from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const signature = process.env.SECRET_JWT_SIGNATURE;

export async function createUser(req, res) {
  try {
    const user = await USER.create(req.body);
    const token = jwt.sign({ user_id: user._id.toString() }, signature, {
      expiresIn: "12h",
    });
    res.send({ success: true, token });
  } catch (error) {
    res.status(500).send({ success: false, msg: "Something went wrong" });
    console.log("error", error);
  }
}

export async function getUser(req, res) {
  const user_id = req.user_id;
  try {
    const user = await USER.findById(user_id).select("-password");
    res.send({ success: true, user: user || {} });
  } catch (error) {
    res.status(500).send({ success: false, msg: "Something went wrong" });
    console.log("error", error);
  }
}
