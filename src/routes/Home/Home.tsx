import  * as  React from 'react';
import {homeProps} from './homeProps'
import './index.less'
function Home (props:homeProps){
  function goto(){

  }
  return (
    <div onClick={goto}>home</div>
  )
}
export default Home