export const AUTH_DATA = "AUTH_DATA";
export const RETURNLOGIN = "RETURNLOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP_USER_FAILURE="SIGNUP_USER_FAILURE";
export const Auth_SUCCESS="Auth_SUCCESS"

export function authDataAction(payload) {
  return {
    type: AUTH_DATA,
    payload,
  };
}
export function AuthSuccess(){
  return{
    type: Auth_SUCCESS,

  }
}
export function GoToLogin(status) {
  return {
    type: RETURNLOGIN,
    payload: status,
  };
}
export const  AuthFail =   user=>{
  return{
    type:SIGNUP_USER_FAILURE,
    payload:user
  }
  // dispatch({ type: SIGNUP_USER_FAILURE ,payload:res.data.errors});

}
export function LogOutAction() {
  return {
    type: LOGOUT,
  };
}


// export const HandelSignUp = (user,router) => (dispatch) => {
//   axios.post("https://estithmar.arabia-it.net/api/auth/register",{...user}
//  ).then(res=>{
//   if(!res.data.errors){
//   localStorage.setItem("user_id",JSON.stringify(res?.data?.data))
//   localStorage.setItem("token",res.data?.data?.access_token)
//   dispatch({ type: AUTH_DATA, payload: res?.data?.data });
//   router.push('/');
//   }else{
//      // NotificationManager.error("");
//      dispatch({ type: SIGNUP_USER_FAILURE ,payload:res.data.errors});
//   }
//  }).catch(err=>NotificationManager.error(err.message))

// }