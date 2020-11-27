import { AnyAction } from 'redux'
import {ProfileState} from './moduleInterface'
const initialState:ProfileState = {

}
export default function(state:ProfileState = initialState,action:AnyAction):ProfileState{
  return state
  // switch (action.type) {
  //     case :
            
  //         break;
    
  //     default:
  //         return state
  // }
}