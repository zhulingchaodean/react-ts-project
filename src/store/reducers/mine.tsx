import { AnyAction } from 'redux'
import {MineState} from './moduleInterface'
const initialState:MineState = {

}
export default function(state:MineState = initialState,action:AnyAction):MineState{
  return state
}