import express from "express";
import { getUserMovieLikes, likeMovie } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/getUserMovieLikes/:username", getUserMovieLikes);
userRouter.patch("/likeMovie/:userId", likeMovie);

export default userRouter;
