import { adaptRoute } from "../adapters/expressRouteAdapter";
import SigninRouterComposer from "../composers/signinRouterComposer";
import SignUpRouterComposer from "../composers/signUpRouterComposer";
import { Router, Request, Response, NextFunction } from "express";
import { validateLogin, validate } from "../middlewares/expressValidator";

const LoginRouter = (router: Router) => {
  router
    .route("/signin")
    .post(
      validateLogin,
      validate,
      (Req: Request, Res: Response, Next: NextFunction) =>
        adaptRoute(SigninRouterComposer.compose())
    );
  router.route("/signup").post(adaptRoute(SignUpRouterComposer.compose()));
};

export default LoginRouter;
