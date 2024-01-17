import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import Rootreducers from "../Reducers/Rootreducers";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  Rootreducers,
  // composeWithDevTools(applyMiddleware(thunk))
  applyMiddleware(thunk)
);
export default store;
