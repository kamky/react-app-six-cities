// Core
import React from "react";
import PropTypes from "prop-types";

// Other
import {Private} from "./Private";
import {Public} from "./Public";

// Component
export const App = ({isAuthenticated}) => {
  return isAuthenticated ? <Private /> : <Public />;
};

App.defaultProps = {
  isAuthenticated: false,
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};
