import express from "express";
import cors from "cors";
import userRoutes from "./Routes/userRoutes.js";

import dotenv from "dotenv";
import { verifyToken } from "./middlewares/middleware.js";
import { login } from "./Controllers/loginController.js";
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(cors({ origin: true, methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.options("*", cors());

app.get("/", (req, res) => res.send({ success: true }));

//Routes

// Login Route
app.post("/login", login);

// User Route

app.use("/user/", userRoutes);

export { app };
