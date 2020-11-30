import  React,{PropsWithChildren} from 'react';
import {homeProps} from './homeProps'
import {RouteComponentProps} from 'react-router-dom'
import {CombinedState,HomeState} from '@/typings/state'
import Header from '@/components/header/Header'
import './index.less'
import { connect } from 'react-redux';
import homeAction from '@/store/actions/homeAction'

const mapStateToProps = (state:CombinedState):HomeState => state.home
type Props = PropsWithChildren< 
RouteComponentProps & 
ReturnType<typeof mapStateToProps> &
  typeof homeAction 
>

function Home (props:Props){
  function goto(){

  }
  return (
    <>
      <Header
        currentCategory={props.currentCategory}
        setCurrentCategory = {props.setCurrentCategory}
      /> 
    </>
  )
}
export default connect(
  mapStateToProps,
  homeAction,
)(Home)