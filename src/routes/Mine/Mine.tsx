import  React,{PropsWithChildren} from 'react';
import {mineProps} from './mineProps'
import { RouteComponentProps} from 'react-router-dom'
import {CombinedState, MineState} from '@/typings/state'
import { connect } from 'react-redux';
import { LOGIN_TYPES } from '@/store/reducers/moduleInterface';
import './index.less'

const mapStateToProps = (state:CombinedState):MineState=> state.mine
type Props = PropsWithChildren< 
RouteComponentProps & 
ReturnType<typeof mapStateToProps> 
>

function Mine(props:Props){
  let content;
  if(props.loginState == LOGIN_TYPES.UN_VALIDATE){
    content = null
  }
  return (
    <>
      <section>
        {content}
      </section>
    </>
  )
}
export default connect(
  mapStateToProps,
  {},
)(Mine)
