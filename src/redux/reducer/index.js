import { combineReducers } from "redux";
import counterReducer from "./countReducer";

export default combineReducers({
  counter: counterReducer,
});
