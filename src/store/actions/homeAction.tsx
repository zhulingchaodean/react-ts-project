import { AnyAction } from "redux"
import { SET_CURRENT_CATEGORY } from "../action-types"

export default {
  setCurrentCategory(currentCategory:string):AnyAction{
    return {
      type:SET_CURRENT_CATEGORY,
      payload:currentCategory
    }
  }
}