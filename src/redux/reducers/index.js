import { combineReducers } from "redux";
import questionReducer from "./EightBall.js";

export default combineReducers({
  QnA: questionReducer,
});
