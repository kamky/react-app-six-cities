// Core
import React from "react";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

// Other
import {App} from "../../routes";

// Component
export const Root = ({
  store
}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object,
};
