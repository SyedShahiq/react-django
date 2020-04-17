import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js';

const initialState = {
    token: localStorage.getItem('token'),
    is_authenticated: null,
    is_loading: false,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            }
        default:
            return state;
    }
}