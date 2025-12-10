import { login_success } from "./loginaction";

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./loginactiontypes";

const initialState = {
    loading: false,
    user: null,
    error: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {

        case "LOADING":
            return { ...state, loading: true };

        case LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload, error: null };

        case LOGIN_FAILURE:
            return { ...state, loading: false, user: null, error: action.payload };

        case LOGOUT:
            return { ...state, loading: false, user: null, error: null };

        default:
            return state;
    }
}
