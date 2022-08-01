import express from "express";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import axios from "axios";
const movie_db_url = "https://api.themoviedb.org/3/movie/";

export const getPopular = async (req: express.Request, res: express.Response) => {
  try {
    const movies = await axios.get(
      `${movie_db_url}popular?api_key=c303ff8ec6840f1f46c431eabcfe2712&language=en-US&page=1`,
    );
    res.status(200).json(movies.data);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getMovie = async (req: express.Request, res: express.Response) => {
  const { movieId } = req.params;
  try {
  } catch (err) {
    res.status(400).json({ err });
  }
};
