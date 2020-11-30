import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Switch,Route,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import {ConfigProvider} from 'antd';
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "@/assets/style/common.less";
import Home from './routes/Home/Home'; // 路由组件
import Mine from './routes/Mine/Mine'; // 路由组件
import Order from './routes/Order/Order'; // 路由组件
import Club from './routes/Club/Club';
import Tab from '@/components/tabs/Tab';
import {ConnectedRouter} from "connected-react-router";
import history from '@/history';
let root = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={zh_CN}>
        <main className="main-continer">
          <Switch >
            <Route exact path="/" component={Home}/> 
            <Route path="/club" component={Club}/>
            <Route path="/order" component={Order}/> 
            <Route path="/mine" component={Mine} /> 
          </Switch>  
        </main>   
        <Tab />
      </ConfigProvider>  
    </ConnectedRouter> 
  </Provider>,
  root
);