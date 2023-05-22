import { combineReducers } from "redux";
import AuthenticationReducer from "./authentication/reducer";
import OrdersReducer from "./orders/reducer";
const rootReducer = combineReducers({
  authentication: AuthenticationReducer,
  orders:OrdersReducer
});

export default rootReducer;