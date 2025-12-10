
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOADING } from "./loginactiontypes";

export const login_success = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const login_failure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    if (username && password) {  

      dispatch(login_success({ username, password }));
    } 
    else if (!password) {
      dispatch(login_failure("Please enter password"));
    }
    else if (!username) {
      dispatch(login_failure("Please enter username"));
    }
  };
};
