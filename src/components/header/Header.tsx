import React from 'react'
import HeaderProps from './HeaderProps'
import classnames from 'classnames';
import './index.less'

function Header(props:HeaderProps){
  const goHome= ()=>{

  }
  const handleHeader = (event:React.MouseEvent<HTMLHeadElement>)=>{
    let target:HTMLHeadElement= event.target as HTMLHeadElement;
    console.log(target.dataset.category);
    
  }
  let bgColor = props.bgColor || '#fff';
  let showHeader = props.showHeader || true; 
  return (
    showHeader && (
      <header className="head" onClick={handleHeader} style={{backgroundColor:bgColor}}>
        <span className={classnames("arrow iconfont iconicon-test7")} onClick={()=>props.history.goBack()}/>
        {
          props.currentCategory == 'Home' && <span className="arrow iconfont iconhome" onClick={goHome}/>
        }
        <div className="title">首页</div>
      </header>
    )
  )
}
export default Header