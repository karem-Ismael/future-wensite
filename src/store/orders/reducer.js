import { SET_BORDERS, REMOVE_BORDERS,ORDER_DETAILS} from "./action";

export default function OrdersReducer(state = {

    
   borders:[],
   orderDetails:{},
   tabsView:true
}, action) {
  switch (action.type) {
    case SET_BORDERS:
      return { ...state, borders:action.payload };
      break;
      case REMOVE_BORDERS:
        return { ...state, borders:[] };
        break;
        case ORDER_DETAILS:
          return {...state,orderDetails:action.payload,tabsView:false}
    
    default:
      return state;
  }
}