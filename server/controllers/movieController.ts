import express from "express";
import axios from "axios";
const movie_db_url = "https://api.themoviedb.org/3/movie/";

export const getPopular = async (req: express.Request, res: express.Response) => {
  const { page } = req.params;
  console.log("getting in the controller function");
  try {
    const movies = await axios.get(
      `${movie_db_url}popular?api_key=${process.env.MOVIE_DB_API_KEY}&page=${page}`,
    );
    res.status(200).json(movies.data);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getMovie = async (req: express.Request, res: express.Response) => {
  const { movieId } = req.params;

  try {
    const movie = await axios.get(
      `${movie_db_url}${movieId}?api_key=${process.env.MOVIE_DB_API_KEY}`,
    );
    res.status(200).json(movie.data);
  } catch (err) {
    res.status(404).json({ err });
  }
};

export const getCast = async (req: express.Request, res: express.Response) => {
  const { movieId } = req.params;

  try {
    const movie = await axios.get(
      `${movie_db_url}${movieId}/credits?api_key=${process.env.MOVIE_DB_API_KEY}`,
    );
    res.status(200).json(movie.data.cast);
  } catch (err) {
    res.status(404).json({ err });
  }
};
