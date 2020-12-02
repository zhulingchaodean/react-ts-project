import { AnyAction } from 'redux'
import {OtherState} from './moduleInterface'
const initialState:OtherState= {

}
export default function(state:OtherState= initialState,action:AnyAction):OtherState{
  return state
}