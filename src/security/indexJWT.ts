import Jwt from "jsonwebtoken";
import dotEnv from "dotenv";
import { Request, Response } from "express";

dotEnv.config();
const secret = process.env.SECRET;
if (!secret) {
  throw new Error("env undefined");
}
const auth = (email: string) => {
  const token = Jwt.sign({ email }, secret, {
    expiresIn: 100, // expires in 5min
  });
  return token;
};
const verify = (req: Request, res: Response, next: any) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  Jwt.verify(token, secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });

    // se tudo estiver ok, salva no request para uso posterior
    next();
  });
};

export { auth, verify };
