import {AnyAction} from 'redux'
import {HomeState} from './moduleInterface'
import {SET_CURRENT_CATEGORY,SET_COUNT} from '../action-types'

const initialState:HomeState = {
  count:0
}
export default function(state:HomeState=initialState,action:AnyAction):HomeState{
  switch (action.type) {
    case SET_COUNT:
      return {...state,count:state.count+action.payload}      
    default:
      return state
  }
}