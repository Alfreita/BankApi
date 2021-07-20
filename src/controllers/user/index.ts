import { auth, verify } from "../../security/indexJWT";
import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
  const { email } = req.body;
  const token = auth(email);
  return res.status(200).json({ auth: true, token: token });
};

export { login };
