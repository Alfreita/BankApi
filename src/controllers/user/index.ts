import { auth, verify } from "../../security/indexJWT";
import { Request, Response } from "express";
import { FindUser, InsertUser } from "../../infra/mongo";
import UserInterface from "../../model/userModel";

const create = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;
    const user: UserInterface = {
      userName,
      email: email,
      password,
    };
    await InsertUser(user);
    return res.status(200).json({ created: true });
  } catch (error) {
    return res.status(500).json({ created: false });
  }
};
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = auth(email);
  const user: UserInterface = {
    userName: "",
    email,
    password,
  };
  const userFound = await FindUser(user);
  return res
    .status(200)
    .json({ auth: true, token: token, userData: userFound });
};
const logout = (req: Request, res: Response) => {
  return res.status(200).json({ auth: false });
};

export { create, login, logout };
