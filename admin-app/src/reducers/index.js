import authReducer from "./authreducers";
import { combineReducers } from "redux";
import userReducer from "./user.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
