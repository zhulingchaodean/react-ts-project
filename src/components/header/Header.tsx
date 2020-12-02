import React, { PropsWithChildren } from 'react'
import HeaderProps from './HeaderProps'
import classnames from 'classnames';
import './index.less'
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { CombinedState,} from '@/typings/state';
import commonAction from '@/store/actions/commonAction';
import { CommonState } from '@/store/reducers/moduleInterface';
import { AnyAction } from 'redux';
import history from '@/history'

type Props =  PropsWithChildren<HeaderProps &
CommonState &
Pick<CommonState,'currentCategory'> &
Pick<typeof commonAction,'setCurrentCategory'>
>
const mapStateToProps = (state:CombinedState):CommonState=> state.common

function Header(props:Props){
  const goHome= (e:React.MouseEvent<HTMLSpanElement>)=>{
    history.replace('/')
  }
  const handleHeader = (event:React.MouseEvent<HTMLHeadElement>)=>{
    let target:HTMLHeadElement= event.target as HTMLHeadElement;
    
  }
  let bgColor = props.bgColor || '#fff';
  let showHeader = props.showHeader || true; 
  return (
    showHeader && (
      <header className="head" onClick={handleHeader} style={{backgroundColor:bgColor}}>
        {/* <span className={classnames("arrow iconfont iconicon-test7")} onClick={()=>history.goBack()}/> */}
        {
          props.currentCategory === 'home' && <span className="arrow iconfont iconhome" onClick={goHome}/>
        }
        <div className="title">{props.title}</div>
      </header>
    )
  )
}
export default connect(
  mapStateToProps,
  commonAction,
)(Header) 