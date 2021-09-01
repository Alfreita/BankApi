import { adaptRoute } from "../adapters/expressRouteAdapter";
import SigninRouterComposer from "../composers/signinRouterComposer";
import SignUpRouterComposer from "../composers/signUpRouterComposer";
import { Router, Request, Response, NextFunction } from "express";
import {
  validateSignin,
  validateSignUp,
  validate,
} from "../middlewares/expressValidator";

const LoginRouter = (router: Router) => {
  router
    .route("/signin")
    .post(
      validateSignin,
      validate,
      (Req: Request, Res: Response, Next: NextFunction) =>
        adaptRoute(SigninRouterComposer.compose())
    );
  router
    .route("/signup")
    .post(
      validateSignUp,
      validate,
      (Req: Request, Res: Response, Next: NextFunction) =>
        adaptRoute(SignUpRouterComposer.compose())
    );
};

export default LoginRouter;
