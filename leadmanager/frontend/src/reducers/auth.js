import { USER_LOADING, USER_LOADED, AUTH_ERROR } from '../actions/types.js';

const initialState = {
    token: localStorage.getItem('token'),
    is_authenticated: null,
    is_loading: false,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                is_loading: true
            }
        case USER_LOADED:
            return {
                ...state,
                is_authenticated: true,
                is_loading: false,
                user: action.payload
            }
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                is_authenticated: false,
                is_loading: false
            }
        default:
            return state;
    }
}