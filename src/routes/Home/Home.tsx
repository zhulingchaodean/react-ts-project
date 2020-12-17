import  React,{PropsWithChildren} from 'react';
import {homeProps} from './homeProps'
import {Route, RouteComponentProps} from 'react-router-dom'
import {CombinedState,HomeState} from '@/typings/state'
import './index.less'
import { connect, useSelector } from 'react-redux';
import classnames from 'classnames'
import homeAction from '@/store/actions/homeAction';

const mapStateToProps = (state:CombinedState):HomeState => state.home
type Props = PropsWithChildren< 
RouteComponentProps & 
ReturnType<typeof mapStateToProps> &
typeof homeAction
>

function Home (props:Props){
  let {count} = props;
  let state = useSelector<CombinedState,HomeState>(state=>state.home)
  console.log(state);
  
  return (
    <>
      <div className={classnames(['home'])}>
        <div className="carousel"></div>
        <div className="homeContiner">
          <div className="starBox"></div>
          <div className="takeFood" onClick={()=>props.increment(10)}>{count}</div>
          <div className="cardContent">
            <div className="takeAway">
              <img src="https://artwork-assets-staging-sbux.starbucks.com.cn/banners-mp-home-tabs-mod/main_ffa655f0-c073-446f-b787-bffb9b3d4396.png" alt=""/>
            </div>
            <div className="inStore">
              <div className="inStoreItem findStore"></div>
              <div className="inStoreItem giveMind"></div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
export default connect(
  mapStateToProps,
  homeAction,
)(Home)

