// Core
import {combineReducers} from "redux";

// Reducers
import {authReducer as auth} from "./domains/auth/auth-reducer";

// Root reducer
export default combineReducers({
  auth,
});
