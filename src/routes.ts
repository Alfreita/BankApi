import express, { Request, Response, Router } from "express";
import { login,create,logout } from "./controllers/user";
import { auth, verify } from "./security/indexJWT";

const router = Router();

//User path
router.route("/create").post((req: Request, res: Response) => create(req, res));
router.route("/dologin").post(verify,(req: Request, res: Response) => login(req, res));
router.route("/dologout").post(verify,(req: Request, res: Response) => logout(req, res));

//Bank features
router.post("/bank/deposit");
router.post("/bank/getcash");
router.post("/bank/getaccount");

export default router;
