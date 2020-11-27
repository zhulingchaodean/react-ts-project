import { createStore,applyMiddleware} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import history from '@/history'
import {routerMiddleware} from 'connected-react-router'
import rootReducer from './reducers'
const store = applyMiddleware(routerMiddleware(history),promise,thunk,logger)(createStore)(rootReducer);
export  default store