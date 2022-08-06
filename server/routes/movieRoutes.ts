import express from "express";
import { getPopular, getMovie, getCast } from "../controllers/movieController.js";

const movieRouter = express.Router();

movieRouter.get("/getPopular/:page", getPopular);
movieRouter.get("/getMovie/:movieId", getMovie);
movieRouter.get("/getCast/:movieId", getCast);

export default movieRouter;
