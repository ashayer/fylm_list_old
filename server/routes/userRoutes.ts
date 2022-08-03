import express from "express";
import {
  getUserLikes,
  likeMovie,
  getUserFriends,
  addFriend,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/:userId/movieLikes", getUserLikes);
router.get("/:userId/likeMovie", likeMovie);
router.get("/:userId/getFriends", getUserFriends);
router.get("/:userId/addFriend", addFriend);

export default router;
