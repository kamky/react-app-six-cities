// Core
import {createStore} from "redux";

// Dev Tool
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

// Root reducer
import rootReducer from "./root-reducer";

// Store
export default createStore(rootReducer, composeWithDevTools());
