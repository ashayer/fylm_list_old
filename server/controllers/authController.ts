import express from "express";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const handleError = (err: any) => {
  let errors: any = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "Account already exists";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }: any) => {
      errors[properties.path] = properties.message;
    });
  }

  if (err.message.includes("Account does not exist with that email")) {
    errors.email = "Account does not exist with that email";
  }

  if (err.message.includes("Invalid password")) {
    errors.email = "Invalid password";
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60; // 3 days in milliseconds

const createToken = (id: mongoose.Types.ObjectId) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export const signup = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(201).json(user._id);
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.schema.methods.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json(user._id);
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};
