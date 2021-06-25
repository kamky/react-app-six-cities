// Core
import React from "react";
import {render} from "react-dom";

// Other
import {Root} from "./components";
import store from "./store/store";

// App
render(<Root store={store} />, document.getElementById(`root`));
