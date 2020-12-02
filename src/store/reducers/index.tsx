import { connectRouter, LocationChangeAction,} from 'connected-react-router'
import { AnyAction, combineReducers, ReducersMapObject,Reducer } from 'redux'
import history from '@/history';
import home from './home'
import mine from './mine'
import common from './common'
import other from './other'
import { CombinedState } from '@/typings/state';
const reducers:ReducersMapObject<CombinedState,AnyAction & LocationChangeAction> = {
  common,
  home,
  mine,
  other,
  router:connectRouter(history)
}
const rootReducer:Reducer<CombinedState,AnyAction> = combineReducers<CombinedState>(reducers)

export default rootReducer
