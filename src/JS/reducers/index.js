import { combineReducers } from "redux";
import { taskReducer } from "./todoReducer";

const rootReducer = combineReducers({ taskReducer });

export default rootReducer;
