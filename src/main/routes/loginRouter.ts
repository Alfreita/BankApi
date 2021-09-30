import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouteAdapter";
import SigninRouterComposer from "../composers/signinRouterComposer";
import SignUpRouterComposer from "../composers/signUpRouterComposer";
import {
  validate,
  validateSignin,
  validateSignUp,
} from "../middlewares/expressValidator";

const LoginRouter = (router: Router) => {
  router
    .route("/signin")
    .post(validateSignin, validate, adaptRoute(SigninRouterComposer.compose()));
  router
    .route("/signup")
    .post(validateSignUp, validate, adaptRoute(SignUpRouterComposer.compose()));
};

export default LoginRouter;
