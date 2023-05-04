import { AUTH_DATA, RETURNLOGIN, CLOSELOGIN, LOGOUT,SIGNUP_USER_FAILURE,Auth_SUCCESS } from "./action";

export default function AuthenticationReducer(state = {

    user: null,
    loading: false,
    errorStatus:true
}, action) {
  switch (action.type) {
    case AUTH_DATA:
      return { ...state, errors:undefined,login_data: action.payload };
      break;
    case RETURNLOGIN:
      return { ...state, Islogin: action.payload };
    case LOGOUT:
      return { login_data: { token: null } };
      case SIGNUP_USER_FAILURE:
            return { ...state, loading: false,errors:action.payload  };
        case Auth_SUCCESS:
        return { ...state, loading: false,errorStatus:false };

    default:
      return state;
  }
}