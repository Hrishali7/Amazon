import {SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAILURE,SIGNUP_RESET,} from "./signupactiontypes";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {


    
    case SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };

    case SIGNUP_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };

    case SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SIGNUP_RESET:
      return initialState;

    default:
      return state;
  }
};
