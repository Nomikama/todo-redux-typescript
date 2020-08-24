import React from "react";
import ReactDOM from "react-dom";
import "./normalize.scss";
import { App } from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxLogger from "redux-logger";
import { rootReducer } from "./store/rootReducer";

const store = createStore(rootReducer, applyMiddleware(reduxLogger));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
