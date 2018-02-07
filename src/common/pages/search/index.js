import React from 'react'
import { Table, Icon, Divider, Pagination } from 'antd';

import http from '../../utils/reqAjax.js'

import './index.less'

export default class SearchComponent extends React.Component{
    state = {
        dbtype:'goods',
        columns:[{
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }, {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <a href="#">Delete</a>
            </span>
          ),
        }],
        data:[{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        }, {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        }, {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        }]
    }
    changeSearch = event =>{
        var doms = this.refs.change.children;
        var len = doms.length;
        for(var i=0;i<len;i++){
            doms[i].classList.remove('active');
        }
        event.target.classList.add('active');
        this.setState({dbtype:event.target.dataset.dbtype});
    }
    startSearch = () =>{
        var keyword = this.refs.keyword.value;
        var url1 = 'searchgoods?keyword='+keyword;
        var url2 = 'searchuser?keyword='+keyword;
        var url3 = 'searchorder?keyword='+keyword;
        var url4 = 'searchadministrator?keyword='+keyword;
        if(this.state.dbtype === 'goods'){
            http.get({url:url1}).then(res =>{
                console.log(res);
            })
        }else if(this.state.dbtype === 'user'){
            http.get({url:url2}).then(res =>{
                console.log(res);
            })
        }else if(this.state.dbtype === 'order'){
            http.get({url:url3}).then(res =>{
                console.log(res);
            })
        }else if(this.state.dbtype === 'administrator'){
            http.get({url:url4}).then(res =>{
                console.log(res);
            })
        }
    }
    render(){
        return(
            <div className="searchpage">
                <div className="searchpage_t">
                    <ul ref="change" onClick={this.changeSearch}>
                        <li data-dbtype="goods" className="active">商品</li>
                        <li data-dbtype="user">用户</li>
                        <li data-dbtype="order">订单</li>
                        <li data-dbtype="administrator">管理员</li>
                    </ul>
                    <input type="text" ref="keyword" />
                    <button onClick={this.startSearch}>搜索</button>
                </div>
                <div className="searchpage_b">
                    <Table columns={this.state.columns} dataSource={this.state.data} pagination={false} />
                    <Pagination defaultCurrent={1} total={50} style={{float:'right',marginTop:'10px'}} />
                </div>
            </div>
        )
    }
}