import { combineReducers } from "redux";
import tasksReducer from "./tasksreducer";

export default combineReducers({
  tasksReducer: tasksReducer,
});
