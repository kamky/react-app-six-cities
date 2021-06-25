// Core
import {createLogger} from "redux-logger";

// Redux Logger
export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action) => {
      return action.error ? `firebrick` : `deepskyblue`;
    },
    prevState: () => `#1c5faf`,
    action: () => `#149945`,
    nextState: () => `#a47104`,
    error: () => `#ff0005`,
  },
});
