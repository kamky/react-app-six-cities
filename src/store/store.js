// Core
import {createStore, applyMiddleware} from "redux";

// Dev Tool
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

// Root reducer
import rootReducer from "./root-reducer";

// Middlewares
const middlewares = [];
import {logger} from "./middlewares/redux-logger";

// TODO: Нужно убрать с pruduction версии
middlewares.push(logger);

// Store
export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);
