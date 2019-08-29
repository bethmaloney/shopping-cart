import { HookRouter } from "hookrouter";
import React from "react";
import HomePage from "../components/HomePage";
import ProductDisplayPage from "../components/ProductDisplayPage";

const routes: HookRouter.RouteObject = {
  "/": () => <HomePage />,
  "/product/:id": (params) => <ProductDisplayPage id={params.id}/>
}

export default routes;
