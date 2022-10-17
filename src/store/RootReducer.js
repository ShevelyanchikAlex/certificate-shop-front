import {combineReducers} from "redux";
import {adminReducer} from "./admin/AdminReducer";

export const rootReducer = combineReducers({adminData: adminReducer});