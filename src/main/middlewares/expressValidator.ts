import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validateLogin = [body("email").isEmail(), body("password").exists()];
const validate = (Req: Request, Res: Response, Next: NextFunction) => {
  const errors = validationResult(Req);
  if (!errors.isEmpty()) {
    return Res.status(400).json({ errors: errors.array() });
  } else {
    Next();
  }
};
export { validateLogin, validate };
