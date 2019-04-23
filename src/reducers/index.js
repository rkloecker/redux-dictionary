import { combineReducers } from "redux";
import dictReducer from "./dictReducer";

export default combineReducers({
  dict: dictReducer
});
