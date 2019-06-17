import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import loginReducer from "./store/reducers/loginReducer";
import registrationReducer from "./store/reducers/registrationReducer";
import thunk from "redux-thunk";

//configure Redux Dev Tools with compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  loginR: loginReducer,
  registrationR: registrationReducer
});

//parse the reducer to the createStore function
const store = createStore(
  rootReducer,
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
