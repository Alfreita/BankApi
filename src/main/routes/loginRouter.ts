import { adaptRoute } from "../adapters/expressRouteAdapter";
import LoginRouterComposer from "../composers/LoginRouterComposer";
import SignUpComposer from "../composers/SignUpRouterComposer";
import { Router } from "express";

const LoginRouter = (router: Router) => {
  router.route("/login").post(adaptRoute(LoginRouterComposer.compose()));
  router.route("/signup").post(adaptRoute(SignUpComposer.compose()));
};

export default LoginRouter;
