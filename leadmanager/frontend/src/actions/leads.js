import axios from 'axios';
import { CreateMessage, returnErrors } from './messages'

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types';

export const getleads = () => (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    axios.get('/api/leads/', config)
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(
            err => dispatch(returnErrors(err.response.data, err.response.status))
        )
}

export const deleteLead = (id) => (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    axios.delete('/api/leads/' + id + '/', config)
        .then(res => {
            if (res.status == 204) {
                dispatch(CreateMessage({
                    leadDeleted: "Lead is Deleted"
                }))
                dispatch({
                    type: DELETE_LEAD,
                    payload: id
                })
            }
        })
}

export const addLead = (lead) => (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    axios.post('/api/leads/', lead, config)
        .then(res => {
            dispatch(CreateMessage({
                leadAdded: "New lead is added"
            }))
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}