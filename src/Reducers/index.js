import { combineReducers } from "redux";
import UserListReducer from "./UserListReducer";
import LoginReducer from "./LoginReducer";

export default combineReducers({
  UserList: UserListReducer,
  Login: LoginReducer
});
