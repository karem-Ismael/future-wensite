import { PROFILEIMAGE} from "./action";

export default function ProfileReducer(state = {
   profileImage:null
}, action) {
  switch (action.type) {
    case PROFILEIMAGE:
      return { ...state, profileImage:action.payload };
      break;
    default:
      return state;
  }
}