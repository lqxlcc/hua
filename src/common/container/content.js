import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import index from '../pages/index'
import follow from '../pages/follow'
import Tools from '../pages/tools'
import Goods from '../pages/goods/goodsComponent';
import Orders from '../pages/orders/ordersComponent';
import Album from '../pages/album'
import Editor from '../pages/editor'



const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content" id="content">
        <Route path="/index" component={index} />
        <Route path="/follow" component={follow} />
        <Route path="/tools" component={Tools} />
        <Route path="/goods" component={Goods} />
        <Route path="/orders" component={Orders} />
        <Route path="/album" component={Album} />
        <Route path="/editor" component={Editor} />

      </Content>
    );
  }
}