import express from "express";
import {
  getUserMovieLikes,
  likeMovie,
  getUserFriends,
  addFriend,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/getUserMovieLikes/:username", getUserMovieLikes);
userRouter.patch("/likeMovie/:userId", likeMovie);
userRouter.get("/:userId/getFriends", getUserFriends);
userRouter.patch("/:userId/addFriend", addFriend);

export default userRouter;
