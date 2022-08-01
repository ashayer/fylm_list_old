import express from "express";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { handleError } from "../middleware/errorHandler.js";

const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds

const createToken = (id: mongoose.Types.ObjectId) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: maxAge,
  });
};

export const loginUser = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.schema.methods.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({ id: user._id, username: user.username });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

export const signupUser = async (req: express.Request, res: express.Response) => {
  const { email, password, username } = req.body;
  try {
    const user = await User.schema.methods.signup(email, password, username);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ id: user.id, username });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};
