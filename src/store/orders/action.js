export const REMOVE_BORDERS = "REMOVE_BORDERS";
export const SET_BORDERS = "SET_BORDERS";
export const LOGOUT = "LOGOUT";
export const SIGNUP_USER_FAILURE="SIGNUP_USER_FAILURE";
export const Auth_SUCCESS="Auth_SUCCESS"

export function AddBorders(payload) {
  return {
    type: SET_BORDERS,
    payload,
  };
}
export function RemoveBorders() {
    return {
      type: REMOVE_BORDERS,
    };
  }



