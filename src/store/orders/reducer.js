import { SET_BORDERS, CONSULT_DETAILS,REMOVE_BORDERS,ORDER_DETAILS} from "./action";

export default function OrdersReducer(state = {

    
   borders:[],
   orderDetails:{},
   tabsView:true,
   consultView:true,
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
    case CONSULT_DETAILS: 
    return {...state,consultDetails:action.payload,consultView:false}
    default:
      return state;
  }
}