import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "swiper/css/bundle";
import App from "./App";
import "./assets/styles/cart.css";
import "./assets/styles/login.css";
import "./assets/styles/main.css";
import "./assets/styles/modal.css";
import "./assets/styles/orders.css";
import "./assets/styles/searchitems.css";

import store from "./components/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
