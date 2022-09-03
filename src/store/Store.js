import { createStore } from "redux";
import cakeReducer from "../reducer/Cakereducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"
const  store  = createStore(cakeReducer);
export default store ;