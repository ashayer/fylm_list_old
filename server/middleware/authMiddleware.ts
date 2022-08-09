import jwt, { TokenExpiredError } from "jsonwebtoken";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  try {
    return jwt.verify(token, process.env.SECRET);
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
    } else {
      next();
    }
    throw err;
  }
};
