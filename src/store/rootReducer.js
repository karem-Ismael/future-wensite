import { combineReducers } from "redux";
import AuthenticationReducer from "./authentication/reducer";
import OrdersReducer from "./orders/reducer";
import ProfileReducer from "./Profile/reducer";
const rootReducer = combineReducers({
  authentication: AuthenticationReducer,
  orders:OrdersReducer,
  profile:ProfileReducer
});

export default rootReducer;