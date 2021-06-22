// Core
import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

// Other
import {routes} from "./routes";
import {Login} from "../pages";

// Component
export const Public = () => {
  return (
    <Switch>
      <Route component={Login} path={routes.LOGIN} exact />
      <Redirect to={routes.LOGIN} />
    </Switch>
  );
};
