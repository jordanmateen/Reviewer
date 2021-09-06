import { createStore, applyMiddleware } from 'redux';
import { FETCH_NAME } from '../actions/constants';
import { nameMiddleWare } from '../middleWare/middleWare';
import { reducer } from './reducer'
const store = createStore(reducer,  applyMiddleware(nameMiddleWare));

store.dispatch({type: FETCH_NAME});
export default store;
