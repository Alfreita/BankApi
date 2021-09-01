import { auth, verify } from "../helpers/jwt";
import { Request, Response } from "express";
class TokenRepository {
  async generate(email: string) {
    return auth(email);
  }
  async validate(req: Request, res: Response, next: any) {
    return verify(req, res, next);
  }
}
export default TokenRepository;
