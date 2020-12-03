import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/app/app";
import { reducer } from "./store/reducer";
import { updateVehicleTrafficEntry } from "./store/action";
import { fakeWebsocket } from "../mocks/websocket";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

setInterval(() => {
  store.dispatch(updateVehicleTrafficEntry(fakeWebsocket()));
}, Math.floor(500 + Math.random() * (3000 + 1 - 1000)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
