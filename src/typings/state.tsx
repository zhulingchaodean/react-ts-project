// export type CombinedState = {
//   [key in keyof typeof reducers] : ReturnType<typeof reducers[key]>
// }

import { CommonState, HomeState, MineState, OtherState} from "@/store/reducers/moduleInterface";
import { RouterState } from "connected-react-router";

export { HomeState, MineState, OtherState} from "@/store/reducers/moduleInterface";
export interface CombinedState {
  common:CommonState,
  home:HomeState,
  mine:MineState,
  other:OtherState,
  router:RouterState
}