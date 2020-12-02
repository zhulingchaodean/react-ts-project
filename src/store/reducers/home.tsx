import {AnyAction} from 'redux'
import {HomeState} from './moduleInterface'
import {SET_CURRENT_CATEGORY} from '../action-types'

const initialState:HomeState = {

}
export default function(state:HomeState=initialState,action:AnyAction):HomeState{
  return state
}