import express from "express";
import { getPopular, getMovie, getCast, searchMovie } from "../controllers/movieController.js";

const movieRouter = express.Router();

movieRouter.get("/getPopular/:page", getPopular);
movieRouter.get("/getMovie/:movieId", getMovie);
movieRouter.get("/getCast/:movieId", getCast);
movieRouter.get("/searchMovie/:query", searchMovie);

export default movieRouter;
