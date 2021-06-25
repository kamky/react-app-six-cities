// Types
import {types} from "./auth-types";

// Initial state
const initialState = {
  isAuthenticated: false,
};

// Reducer
export const authReducer = (state = initialState, {type}) => {
  switch (type) {
    case types.LOGIN:
      return Object.assign({}, state, {
        isAuthenticated: true,
      });
    case types.LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
      });
    default:
      return state;
  }
};
