import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";

//parse the reducer to the createStore function
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  //Parse the store as a property of provider.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
