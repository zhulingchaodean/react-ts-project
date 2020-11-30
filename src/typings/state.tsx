// export type CombinedState = {
//   [key in keyof typeof reducers] : ReturnType<typeof reducers[key]>
// }

import { HomeState, MineState, ProfileState } from "@/store/reducers/moduleInterface";
import { RouterState } from "connected-react-router";

export { HomeState, MineState, ProfileState } from "@/store/reducers/moduleInterface";
export interface CombinedState {
  home:HomeState,
  mine:MineState,
  profile:ProfileState,
  router:RouterState
}