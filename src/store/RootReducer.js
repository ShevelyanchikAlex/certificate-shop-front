import {combineReducers} from "redux";
import {adminReducer} from "./admin/AdminReducer";
import {userReducer} from "./user/UserReducer";
import {paginationReducer} from "./pagination/PaginationReducer";

export const rootReducer = combineReducers({
    adminData: adminReducer,
    userData: userReducer,
    paginationData: paginationReducer,
});