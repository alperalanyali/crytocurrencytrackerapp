import {FETCHING_COIN_DATA, FETCHING_COIN_DATA_FAILURE, FETCHING_COIN_DATA_SUCCESS} from './../Utils/ActionTypes';

import { createPortal } from 'react-dom';

const initilState = {
    isFetching:null,
    data:[],
    hasError:false,
    errorMessage:null
}
export default function(state=initilState,action){
    switch(action.type){
        case  FETCHING_COIN_DATA:
            return  Object.assign({},state,{
                isFetching:false,
                data:[],
                hasError:false,
                errorMessage:null
            });
        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({},state,{
                isFetching:false,
                data:action.payload,
                hasError:false,
                errorMessage:null
            })
        case FETCHING_COIN_DATA_FAILURE:
            return Object.assign({},state,{
                isFetching:false,
                data:action.payload,
                hasError:true,
                errorMessage:action.err
            })
        default:
            return state;
     }   
};