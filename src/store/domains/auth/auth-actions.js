// Types
import {types} from "./auth-types";

// Actions
export const authActions = {
  login: () => ({
    type: types.LOGIN,
    payload: true,
  }),
  logout: () => ({
    type: types.LOGOUT,
    payload: false,
  }),
};
