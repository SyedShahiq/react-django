import { GET_LEADS, DELETE_LEAD } from '../actions/types.js';

const initialState = {
    leads: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            }
        case DELETE_LEAD:
            let leads_arr = state.leads;
            leads_arr = leads_arr.filter(lead => lead.id != action.payload);
            return {
                ...state,
                leads: leads_arr
            }
        default:
            return state;
    }
}