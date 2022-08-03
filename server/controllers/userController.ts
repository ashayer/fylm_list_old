import express from "express";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import axios from "axios";

export const getUserLikes = async (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json();
  } catch (error) {
    res.status(404).json(error);
  }
};

export const likeMovie = async (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json();
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
