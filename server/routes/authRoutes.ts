import express from "express";
import { loginUser, signupUser, logoutUser } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/signup", signupUser);
authRouter.post("/logout", logoutUser);
export default authRouter;
