import express from "express";
import User from "../models/userModel.js";

export const signUp = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(400).send("error bozo");
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  console.log(req.body);
  res.send("login");
};
