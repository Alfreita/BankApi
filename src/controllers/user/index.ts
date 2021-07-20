import { auth, verify } from "../../security/indexJWT";
import { Request, Response } from "express";

const create = (req: Request, res: Response) => {
  const { email, password } = req.body;

  return res.status(200).json({ created: true });
};
const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = auth(email);
  return res.status(200).json({ auth: true, token: token });
};
const logout = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = auth(email);
  return res.status(200).json({ auth: true, token: token });
};

export { create, login, logout };
