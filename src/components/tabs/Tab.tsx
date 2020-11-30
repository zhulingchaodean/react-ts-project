import React from 'react';
import { HomeOutlined,ShoppingCartOutlined,UserOutlined} from "@ant-design/icons";
import { Link,NavLink,withRouter} from 'react-router-dom'
import "./index.less";
import  TabPaneProps  from './TabProps';

export default function Tab(props:TabPaneProps){
  return (
    <footer>
      <NavLink exact to="/"><HomeOutlined /><span>首页</span></NavLink>
      <NavLink to="/club"><ShoppingCartOutlined/><span>星享俱乐部</span></NavLink>
      <NavLink to="/order"><ShoppingCartOutlined/><span>订单</span></NavLink>
      <NavLink to="/mine"><UserOutlined/><span>我的</span></NavLink>
    </footer>
  )

}