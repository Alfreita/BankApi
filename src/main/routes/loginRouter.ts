import { adaptRoute } from "../adapters/expressRouteAdapter";
import SigninRouterComposer from "../composers/signinRouterComposer";
import SignUpRouterComposer from "../composers/signUpRouterComposer";
import { Router } from "express";

const LoginRouter = (router: Router) => {
  router.route("/signin").post(adaptRoute(SigninRouterComposer.compose()));
  router.route("/signup").post(adaptRoute(SignUpRouterComposer.compose()));
};

export default LoginRouter;
