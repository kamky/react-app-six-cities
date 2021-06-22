// Core
import React from "react";
import {BrowserRouter} from "react-router-dom";

// Other
import {App} from "../../routes";

// Component
export const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
