import React from "react";
import ReactDOM from "react-dom";
import "./normalize.scss";
import { App } from "./App";
import { rootReducer } from "./store/rootReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(reduxLogger));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
