import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-pro-sidebar/dist/css/styles.css";
import "./index.css";
import AppRouter from "./router";
import * as serviceWorker from "./serviceWorker";
import store from "../main/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
