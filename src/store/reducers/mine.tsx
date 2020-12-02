import { AnyAction } from 'redux'
import {MineState,LOGIN_TYPES} from './moduleInterface'

//  mine 的初始值
const initialState:MineState = {
  loginState:LOGIN_TYPES.UN_LOGIN,
  user:null,
  error:null
}
export default function(state:MineState = initialState,action:AnyAction):MineState{
  return state
}