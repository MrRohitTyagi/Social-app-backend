import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
const signature = process.env.SECRET_JWT_SIGNATURE;

export function verifyToken(req, res, next) {
  try {
    const token = req.headers["token"];
    if (!token) {
      return res.status(401).json({
        success: false,
        msg: "No token provided",
      });
    }

    jwt.verify(token, signature, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({
            success: false,
            msg: "Token expired, please login again",
          });
        } else {
          return res.status(401).json({
            success: false,
            msg: "Invalid token",
          });
        }
      }

      req.user_id = decoded.user_id;
      next();
    });
  } catch (error) {
    console.error("Error in verifyToken:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
    });
  }
}
