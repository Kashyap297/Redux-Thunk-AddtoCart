import { applyMiddleware, createStore } from "redux";
import addCartReducer from "./Reducer";
import { thunk } from "redux-thunk";

const store = createStore(addCartReducer, applyMiddleware(thunk))

export default store