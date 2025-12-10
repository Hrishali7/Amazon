import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,SIGNUP_RESET} from "./signupactiontypes";


export const signupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupFailure = (payload) => ({
  type: SIGNUP_FAILURE,
  payload,
});

export const signupReset = (payload) => ({
  type: SIGNUP_RESET,
  payload,
});

export const signupUser = ({ name, email, password }) => {
  return (dispatch) => {
    
    dispatch({ type: SIGNUP_REQUEST });
  
    if (!name) {

 
    
      dispatch(signupFailure("Please enter name"));
    } else if (!email) {

      dispatch(signupFailure("Please enter email"));
    } else if (!password) {

      dispatch(signupFailure("Please enter password"));
    } else {
   dispatch(signupReset("hello"));
      dispatch(signupSuccess({ name, email, password }));
    }
  };
};
