import {AnyAction} from 'redux'
import {HomeState} from './moduleInterface'

const initialState:HomeState = {

}
export default function(state:HomeState=initialState,action:AnyAction):HomeState{
  return state;
}