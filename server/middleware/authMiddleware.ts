import jwt, { VerifyOptions } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET, (err: any, decodedToken: any) => {
      if (err) {
        res.redirect("/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

// export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {

//     const token = req.cookies.jwt;
//     if (token) {
//       jwt.verify(token, process.env.SECRET, (err: any, decodedToken: any) => {
//         if (err) {
//           res.redirect("/login");
//         } else {
//           const userToken = req.cookies.user;
//           console.log(userToken);
//           if (userToken) {
//             next();
//           } else {
//             res.redirect(307, "/login");
//           }
//         }
//       });
//     } else {
//       res.redirect("/login");
//     }
  
// };
