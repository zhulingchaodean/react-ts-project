import { AnyAction, Dispatch } from "redux";
import { SET_COUNT } from "../action-types";

export default {
  increment(num:number):Function{
    return (dispatch:Dispatch):void=>{
      dispatch({
        type:SET_COUNT,
        payload:num
      })    
    }
  }
}