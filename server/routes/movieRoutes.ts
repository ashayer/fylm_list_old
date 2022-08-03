import express from "express";
import { getPopular, getMovie, getCast } from "../controllers/movieController.js";

const router = express.Router();

router.get("/getPopular", getPopular);
router.get("/getMovie/:movieId", getMovie);
router.get("/getCast/:movieId", getCast);

export default router;
