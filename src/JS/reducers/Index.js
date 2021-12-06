import { combineReducers } from "redux";
import { taskReducers } from "./Task";
export const rootReducer = combineReducers({ taskReducers });
