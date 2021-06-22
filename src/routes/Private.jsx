// Core
import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

// Other
import {routes} from "./routes";
import {Main, Favorites} from "../pages";

// Component
export const Private = () => {
  return (
    <Switch>
      <Route
        component={Main}
        path={routes.ROOT}
        exact
      />
      <Route
        component={Favorites}
        path={routes.FAVORITES}
        exact
      />
      <Redirect to={routes.ROOT} />
    </Switch>
  );
};
