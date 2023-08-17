import { PROFILEIMAGE,WALLETTRANSACTIONS,INVOICE,WALLETBALANCE,PROFILINFO,ALLWALLETTRANSACTIONS} from "./action";

export default function ProfileReducer(state = {
   profileImage:null,
   WalletTransactionsArr:[],
   AllWalletTransactionsArr:[],
   WalletBalance:null,
   InVoicesArr:[],
   profileInfo:null
}, action) {
  switch (action.type) {
    case PROFILEIMAGE:
      return { ...state, profileImage:action.payload };
      break;
      case WALLETTRANSACTIONS: 
      return { ...state, WalletTransactionsArr:action.payload };
      break;
      case WALLETBALANCE:
      return { ...state, WalletBalance:action.payload };
      break;
      case INVOICE:
      return { ...state, InVoicesArr:action.payload };
      break;
      case PROFILINFO:
      return { ...state, profileInfo:action.payload };
      break;
      case  ALLWALLETTRANSACTIONS:
      return { ...state, AllWalletTransactionsArr:action.payload };

    default:
      return state;
  }
}