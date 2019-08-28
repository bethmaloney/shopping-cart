import { HookRouter } from "hookrouter";
import React from "react";
import HomePage from "../components/HomePage";

const routes: HookRouter.RouteObject = {
  "/": () => <HomePage />
}

export default routes;
