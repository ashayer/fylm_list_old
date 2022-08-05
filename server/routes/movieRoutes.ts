import express from "express";
import { getPopular, getMovie, getCast } from "../controllers/movieController.js";

const router = express.Router();

router.get("/getPopular/:page", getPopular);
router.get("/getMovie/:movieId", getMovie);
router.get("/getCast/:movieId", getCast);

export default router;
