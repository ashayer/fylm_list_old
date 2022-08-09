import jwt, { TokenExpiredError } from "jsonwebtoken";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  // if (token) {
  //   jwt.verify(token, process.env.SECRET, (err: jwt.TokenExpiredError) => {
  //     if (err) {
  //     } else {
  //       next();
  //     }
  //   });
  // } else {
  //   console.log("asd");
  // }

  try {
    jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw err;
    } else {
      next();
    }
  }
};
