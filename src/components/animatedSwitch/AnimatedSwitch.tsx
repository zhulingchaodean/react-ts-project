import React, { ComponentType, PropsWithChildren, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ConnectedComponent } from 'react-redux';
import { Motion,spring, } from 'react-motion'
import './index.less';

type Props = PropsWithChildren<
{
  type?:string // className
  duration?:number // 时长
}&
Partial<RouteComponentProps>
>
export default function AnimatedSwitch(Com: ComponentType<Props>|ConnectedComponent<ComponentType<Props>,Props>){
  return function(props:Props){
    let [show,setShow] = useState(true) 
    useEffect(()=>{
      setShow(false);
      return ()=>{
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
      <Motion style={{x: spring( show?500:0 ),opacity:show?0:1}}>
        {({x,opacity}) =>
        // children is a callback which should accept the current value of
        // `style`
          <div className="demo0-block" style={{
            transform: `translate3d(${x}px, 0, 0)`,
            opacity:`${opacity}`,
          }} >
            <Com {...props}/>
          </div>
        }
      </Motion>
    // </CSSTransition>
    )
  }
}