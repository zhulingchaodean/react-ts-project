import { connectRouter, LocationChangeAction,} from 'connected-react-router'
import { AnyAction, combineReducers, ReducersMapObject,Reducer } from 'redux'
import history from '@/history';
import home from './home'
import mine from './mine'
import profile from './profile'
import { CombinedState } from '@/typings/state';
const reducers:ReducersMapObject<CombinedState,AnyAction & LocationChangeAction> = {
  home,
  mine,
  profile,
  router:connectRouter(history)
}
const rootReducer:Reducer<CombinedState,AnyAction> = combineReducers<CombinedState>(reducers)

export default rootReducer
