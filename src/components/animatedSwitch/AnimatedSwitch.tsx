import React, { Component, ComponentType, PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ConnectedComponent } from 'react-redux';
import { Motion,spring, } from 'react-motion'
import './index.less';

type Props = PropsWithChildren<
{
  children:ReactNode,
  type?:string // className
  duration?:number // 时长
}&
RouteComponentProps
>
export default function AnimatedSwitch(Com: ComponentType<Props>|ConnectedComponent<ComponentType<Props>,Props>){
  return function(props:Props){
    let [show,setShow] = useState(true) 
    useEffect(()=>{
      setShow(false);
      console.log(22);
      
      return ()=>{
        console.log(23);
        
        setShow(true)
      }
    },[]) 
    return (
      // <CSSTransition
      //   in={match != null}
      //   key={location.key}
      //   classNames={{
      //     enter:'fade',
      //     enterActive:'fade',
      //     exit:'fade',
      //     exitActive:'fade'
      //   }} 
      //   timeout={props.duration || 3000}
      //   mountOnEnter={true}
      //   unmountOnExit={true}
      // >
      // <Motion style={{x: spring( show?200:0 ),opacity:show?0:1}}>
      //   {({x,opacity}) =>
      //     <div className="demo0-block" style={{
      //       transform: `translate3d(${x}px, 0, 0)`,
      //       opacity:`${opacity}`,
      //     }} >
      <Com {...props}/>
      //     </div>
      //   }
      // </Motion>
    // </CSSTransition>
    )
  }
}