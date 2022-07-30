import express from "express";
import { login, signup } from "../controllers/authController.js";
import requireAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", requireAuth, login);

export default router;
