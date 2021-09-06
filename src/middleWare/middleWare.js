import * as actions from '../actions/actionCreators'
import { FETCH_NAME, FETCH_NAME_FAILURE, FETCH_NAME_SUCCESS } from '../actions/constants';

const fetchName = (dispatch) => {
    fetch('https://swapi.dev/api/people/12')
    .then(res => res.json())
    .then( res => {
        const splitName = res.name.split(' ');
        const firstName = splitName[0];
        const lastName = splitName[1];
        dispatch({type: FETCH_NAME_SUCCESS, data: {firstName,lastName}});
    }).catch(error => {
        dispatch({type: FETCH_NAME_FAILURE, data: error});
    })
}

export const nameMiddleWare = ({dispatch}) => next => action => {
    const { type } = action
    switch(type) {
        case FETCH_NAME :
            fetchName(dispatch)
            break;
        default :
            next(action)
    }
}