import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Route,Redirect,Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import {ConfigProvider } from 'antd';
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "@/assets/style/common.less";
import Home from './routes/Home/Home'; // 路由组件
import Mine from './routes/Mine/Mine'; // 路由组件
import Order from './routes/Order/Order'; // 路由组件
import Club from './routes/Club/Club';
import Tab from '@/components/tabs/Tab';
import {ConnectedRouter} from "connected-react-router";
import AnimatedSwitch from '@/components/animatedSwitch/AnimatedSwitch'
import history from '@/history';
let root= document.getElementById('root');
console.log(Home)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={zh_CN}>
        <main className="main-continer">
          <Switch>
            <Route exact path="/" component={AnimatedSwitch(Home)}/> 
            <Route path="/club" component={AnimatedSwitch(Club)}/>
            <Route path="/order" component={AnimatedSwitch(Order)}/> 
            <Route path="/mine" component={AnimatedSwitch(Mine)} /> 
          </Switch>  
        </main>   
        <Tab />
      </ConfigProvider>  
    </ConnectedRouter> 
  </Provider>,
  root
);