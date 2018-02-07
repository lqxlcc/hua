import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import './index.less';

import http from '../../utils/reqAjax.js';

export default class index extends React.Component {
    state = {
        user:0,
        order:0,
        administrator:0,
        newuser:0,neworder:0,
        newadministrator:0,
        userdata:[],
        orderdata:[],
        administratordata:[]
    }
    componentDidMount(){
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        month = month<=9 ? '0'+month : month;
        var day = now.getDate();
        day = day<=9 ? '0'+day : day;
        var nowTime = year + '-' + month + '-' + day;
        var url1 = 'getuser?time='+nowTime;
        var url2 = 'getorder?time='+nowTime;
        var url3 = 'getadministrator?time='+nowTime;
        http.get({url:url1}).then(res =>{
            var results1 = res.data.results;
            var total1 = res.data.total;
            var data1 = res.data.data;
            this.setState({newuser:results1,user:total1,userdata:data1});
            http.get({url:url2}).then(res =>{
                var results2 = res.data.results;
                var total2 = res.data.total;
                var data2 = res.data.data;
                this.setState({neworder:results2,order:total2,orderdata:data2});
                http.get({url:url3}).then(res =>{
                    var results3 = res.data.results;
                    var total3 = res.data.total;
                    var data3 = res.data.data;
                    this.setState({newadministrator:results3,administrator:total3,administratordata:data3});
                })
            })
        })
    }
    render() {
        var fontColor = {color:'#6cc788'};
        return (
            <div>
                <Row gutter={10}>
                    <Col span={6}>
                        <div className="title-box">
                            <Card>
                                <h2 style={fontColor}>今日数据：</h2>
                            </Card>
                        </div>
                        <div className="title-box">
                            <Card>
                                <h2>总数据：</h2>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="user-add" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">新增用户</div>
                                        <h2>{this.state.newuser}</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="user" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">注册用户</div>
                                        <h2>{this.state.user}</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="shop" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">新增订单</div>
                                        <h2>{this.state.neworder}</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="shop" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">订单</div>
                                        <h2>{this.state.order}</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="usergroup-add" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">新增管理员</div>
                                        <h2>{this.state.newadministrator}</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="team" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">管理员</div>
                                        <h2>{this.state.administrator}</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>新增用户</h3>
                                    <small>今日新增用户</small>
                                </div>
                                <a className="card-tool"><Icon type="user" /></a>
                                <Timeline className="showMessage">
                                    <Timeline.Item color="white">
                                        <span>用户名：</span>
                                        <span>性别：</span>
                                        <span>昵称：</span>
                                    </Timeline.Item>
                                    {this.state.userdata.map(function(item){
                                        return (
                                        <Timeline.Item color="green" key={item.id}>
                                            <span>{item.username}</span>
                                            <span>{item.gender}</span>
                                            <span>{item.nickname}</span>
                                        </Timeline.Item>
                                        )
                                    })}
                                </Timeline>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>新增订单</h3>
                                    <small>今日新增订单</small>
                                </div>
                                <a className="card-tool"><Icon type="shop" /></a>
                                <Timeline className="showMessage">
                                    <Timeline.Item color="white">
                                        <span>订单ID：</span>
                                        <span>用户ID：</span>
                                        <span>订单状态：</span>
                                    </Timeline.Item>
                                    {this.state.orderdata.map(function(item){
                                        return (
                                        <Timeline.Item color="green" key={item.id}>
                                            <span>{item.id}</span>
                                            <span>{item.userid}</span>
                                            <span>{item.status}</span>
                                        </Timeline.Item>
                                        )
                                    })}
                                </Timeline>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>新增管理员</h3>
                                    <small>今日新增管理员</small>
                                </div>
                                <a className="card-tool"><Icon type="team" /></a>
                                <Timeline className="showMessage">
                                    <Timeline.Item color="white">
                                        <span>用户名：</span>
                                        <span>职位：</span>
                                        <span>修改权限：</span>
                                    </Timeline.Item>
                                    {this.state.administratordata.map(function(item){
                                        return (
                                        <Timeline.Item color="green" key={item.id}>
                                            <span>{item.username}</span>
                                            <span>{item.position}</span>
                                            <span>{item.updatelimit}</span>
                                        </Timeline.Item>
                                        )
                                    })}
                                </Timeline>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}