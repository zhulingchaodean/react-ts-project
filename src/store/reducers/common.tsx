import { AnyAction } from "redux";
import { SET_CURRENT_CATEGORY } from "../action-types";
import { CommonState } from "./moduleInterface";
const initCommonState:CommonState = {
  currentCategory:'home',
}
export default function(state:CommonState = initCommonState,action:AnyAction):CommonState{
  switch(action.type){
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory:action.payload
      }
    default:
      return state;
  }
}