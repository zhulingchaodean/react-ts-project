import {AnyAction} from 'redux'
import {HomeState} from './moduleInterface'
import {SET_CURRENT_CATEGORY} from '../action-types'

const initialState:HomeState = {
  currentCategory:'Home',
}
export default function(state:HomeState=initialState,action:AnyAction):HomeState{
  switch (action.type){
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory:action.payload
      }
    default:
      return state
  }
  return state;
}