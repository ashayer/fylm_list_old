import express from "express";
import {
  getUserMovieLikes,
  likeMovie,
  getUserFriends,
  addFriend,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/getUserMovieLikes/:userId", getUserMovieLikes);
router.patch("/likeMovie/:userId", likeMovie);
router.get("/:userId/getFriends", getUserFriends);
router.patch("/:userId/addFriend", addFriend);

export default router;
