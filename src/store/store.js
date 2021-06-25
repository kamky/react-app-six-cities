// Core
import {createStore, applyMiddleware} from "redux";

// Dev Tool
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

// Root reducer
import rootReducer from "./root-reducer";

// Middlewares
const middlewares = [];
import thunk from "redux-thunk";
import {logger} from "./middlewares/redux-logger";

// TODO: Нужно убрать с pruduction версии logger
middlewares.push(logger);
middlewares.push(thunk);

// Store
export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);
