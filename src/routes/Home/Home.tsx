import  React,{PropsWithChildren} from 'react';
import {homeProps} from './homeProps'
import {Route, RouteComponentProps} from 'react-router-dom'
import {CombinedState,HomeState} from '@/typings/state'
import Header from '@/components/header/Header'
import './index.less'
import { connect } from 'react-redux';

const mapStateToProps = (state:CombinedState):HomeState => state.home
type Props = PropsWithChildren< 
RouteComponentProps & 
ReturnType<typeof mapStateToProps> 
>

function Home (props:Props){
  function goto(){

  }
  return (
    <>
      <Header title="首页"/>
    </>
  )
}
export default connect(
  mapStateToProps,
  {},
)(Home)

