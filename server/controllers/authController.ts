import express from "express";
import User from "../models/userModel.js";

const handleError = (err: any) => {
  let errors: any = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "Account already exists"
    return errors
  };

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }: any) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

export const signUp = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  console.log(req.body);
  res.send("login");
};
