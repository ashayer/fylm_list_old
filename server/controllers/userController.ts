import express from "express";
import mongoose from "mongoose";
import User from "../models/userModel.js";

export const getUserMovieLikes = async (req: express.Request, res: express.Response) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user?.movieLikes);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const likeMovie = async (req: express.Request, res: express.Response) => {
  const { userId } = req.params;
  const { updatedMovieList } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, { movieLikes: updatedMovieList });
    res.status(200).json({ user });
  } catch (err) {
    res.status(404).json({ err });
  }
};

export const getUserFriends = async (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(404).json(error);
  }
};

export const addFriend = async (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(404).json(error);
  }
};
