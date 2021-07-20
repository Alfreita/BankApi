import express from "express";

const Routes = express.Router();

//User path
Routes.post("/create");
Routes.post("/dologin");
Routes.post("/dologout");

//Bank features
Routes.post("/bank/deposit");
Routes.post("/bank/getcash");
Routes.post("/bank/getaccount");

export default Routes;
