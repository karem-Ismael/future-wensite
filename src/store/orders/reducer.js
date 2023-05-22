import { SET_BORDERS, REMOVE_BORDERS} from "./action";

export default function OrdersReducer(state = {

    
   borders:[]
}, action) {
  switch (action.type) {
    case SET_BORDERS:
      return { ...state, borders:action.payload };
      break;
      case REMOVE_BORDERS:
        return { ...state, borders:[] };
        break;
    
    default:
      return state;
  }
}