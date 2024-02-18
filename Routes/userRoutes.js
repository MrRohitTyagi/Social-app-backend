import { Router } from "express";
import { createUser, getUser } from "../Controllers/UserController.js";
import { verifyToken } from "../middlewares/middleware.js";
const router = Router();

router.post("/create/", createUser);

router.use(verifyToken);

router.get("/get/", getUser);

export default router;
