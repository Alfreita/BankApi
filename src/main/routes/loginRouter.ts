import { adaptRoute } from "../adapters/expressRouteAdapter";
import LoginRouterComposer from "../composers/LoginRouterComposer";
import { Router } from "express";

const LoginRouter = (router: Router) => {
  router.route("/login").post(adaptRoute(LoginRouterComposer.compose()));
  router.route("/signin").post(adaptRoute(LoginRouterComposer.compose()));
  router.route("/getAccount").post(adaptRoute(LoginRouterComposer.compose()));
};

export default LoginRouter;
