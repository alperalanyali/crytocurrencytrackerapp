import {FETCHING_COIN_DATA, FETCHING_COIN_DATA_FAILURE, FETCHING_COIN_DATA_SUCCESS} from './../Utils/ActionTypes';

import {apiBaseURL} from '../Utils/Constants'
import axios from'axios';

export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
            .then(res => {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });                
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
            });   

    }
}