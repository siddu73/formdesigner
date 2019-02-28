import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { reducer } from "./reducers";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello />
    <h2>Loging Redux</h2>
  </div>
);

// function reducer(state = ["HELLO", "YOURS"], action) {
//   switch (action.type) {
//     case "ADD_PEOPLE":
//       console.log(action);
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }
const store = createStore(reducer, applyMiddleware(logger));
console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);