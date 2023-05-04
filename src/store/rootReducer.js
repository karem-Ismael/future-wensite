import { combineReducers } from "redux";
import AuthenticationReducer from "./authentication/reducer";

const rootReducer = combineReducers({
  authentication: AuthenticationReducer,
});

export default rootReducer;