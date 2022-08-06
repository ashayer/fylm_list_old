import express from "express";
import { loginUser, signupUser } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/signup", signupUser);

export default authRouter;
