import express from "express";
import * as authController from "../controllers/authController.js";
import requireAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", requireAuth, authController.signUp);
router.post("/login", requireAuth, authController.login);

export default router;
