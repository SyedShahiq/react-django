import axios from 'axios';
import { GET_LEADS, DELETE_LEAD } from './types';

export const getleads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(
            err => console.log(err)
        )
}

export const deleteLead = (id) => dispatch => {
    axios.delete('/api/leads/' + id + '/')
        .then(res => {
            if (res.status == 204) {
                dispatch({
                    type: DELETE_LEAD,
                    payload: id
                })
            }
        })
}