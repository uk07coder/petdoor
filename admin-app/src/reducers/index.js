import authReducer from "./authreducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
