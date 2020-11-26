import { createStore,applyMiddleWare } from "redux";
import logger from 'redux-logger';
import * as thunk from 'redux-thunk';
import * as promise from 'redux-promise';
import history from '@/history'
import {routerMiddleware} from 'connected-react-router'

const store = applyMiddleWare(routerMiddleware(history),promise,thunk,logger)(createStore)(rootReducer);
export  default store