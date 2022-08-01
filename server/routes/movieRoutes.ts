import express from "express";
import { getPopular, getMovie } from "../controllers/movieController.js";

const router = express.Router();

router.get("/getPopular", getPopular);
router.get("/getMovie/:movieId", getMovie);

export default router;
