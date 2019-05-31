import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import loginReducer from "./store/reducers/loginReducer";
import myAreaReducer from "./store/reducers/myAreaReducer";
import thunk from "redux-thunk";

//configure Redux Dev Tools with compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  loginR: loginReducer,
  myAreaR: myAreaReducer
});

//parse the reducer to the createStore function
const store = createStore(
  rootReducer,
  // loginReducer,
  //call composeEnhancers
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  //Parse the store as a property of provider.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
