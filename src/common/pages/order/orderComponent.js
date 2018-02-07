import React, {Component} from 'react'
import {connect} from 'react-redux'
import './index.less'
import * as actions from './goodsAction'
import { Pagination } from 'antd';
class GoodsComponent extends Component{
    
    
    componentWillMount(){
        this.props.getGoods()
    }
    
    deleteGoods(proItem){
        
        this.props.deleteGoods(proItem.id).then(res => {
            console.log(res);
            if(res.results.affectedRows == 1){
                this.props.getGoods();
            }
        });
    }
    // insertGoods(proItem){
    //     this.props.insertGoods(proItem.id).then(res => {
            
    //     });
    // }
    // pages(event){
    //     var num = event.target.innerText ;
    //     if(event.target.tagName.toLowerCase() ==='span'){
    //         this.props.getGoods(num);
    //         var doms = document.getElementsByTagName('span');
    //         for(var i=0,len=doms.length;i<len;i++){

    //             doms[i].classList.remove('active');
    //         }

    //         event.target.classList.add('active') ;
    //     }

    // }
    editTab(proItem,event){
       event.persist()
        // 利用事件源对象判断是否点击了td
        if(event.target.tagName.toLowerCase() === 'td'){
            // 第一列与最后一列不可编辑
            // firstElementChild/lastElementChild
            console.log(event.target)

            var idx =event.target.cellIndex;
            
            if(idx===0 || idx===1|| idx===7|| idx===6 || idx===5){
               
                return;
            }

            // 创建一个input
            var input = document.createElement('input');
            input.type = 'text';
            input.value = event.target.innerText;

            event.target.innerHTML = '';
            event.target.appendChild(input);

            input.focus();

            input.onblur = function(){
                //如何在此处获取td
                
                event.target.innerHTML = input.value;
                this.editValue = event.target.innerHTML;
                if(idx===1){
                    var type = this.editValue;
                    this.props.updateGoods(proItem.id,proItem.price,proItem.title,type,proItem.saleqty).then(res => {
                        console.log(res);
                        // if(res.results.affectedRows == 1){
                        //     this.props.getGoods();
                        // }
                    });
                }
                if(idx===2){
                    var title = this.editValue;
                    this.props.updateGoods(proItem.id,proItem.price,title,proItem.type,proItem.saleqty).then(res => {
                        console.log(res);
                        // if(res.results.affectedRows == 1){
                        //     this.props.getGoods();
                        // }
                    });
                }
                if(idx===3){
                    var price = this.editValue;
                    this.props.updateGoods(proItem.id,price,proItem.title,proItem.type,proItem.saleqty).then(res => {
                        console.log(res);
                        // if(res.results.affectedRows == 1){
                        //     this.props.getGoods();
                        // }
                    });
                }
                if(idx===4){
                    var saleqty = (this.editValue)*1;
                    this.props.updateGoods(proItem.id,proItem.price,proItem.title,proItem.type,saleqty).then(res => {
                        console.log(res);
                        // if(res.results.affectedRows == 1){
                        //     this.props.getGoods();
                        // }
                    });
                }
                
                 
                
            }.bind(this)
             

            
        }

        
    }
    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
        this.props.getGoods(pageNumber);
    }
    render(){
        
        return (
            <div>
                <table className="goodsTable">
                    <thead>
                        <tr>
                            <th>商品ID</th>
                            <th>商品类型</th>
                             <th className="title">商品描述</th>
                             <th>价格</th>
                             <th>库存</th>
                             <th>发行时间</th>
                             <th>操作</th>
                         </tr>
                    </thead>
                   

                        {
                    this.props.ajaxResult.map( item => {
                        return (
                             <tbody key={item.id} onClick={this.editTab.bind(this,item)}>
                             <tr>
                                <td className="tdId">{item.id}</td>
                                <td className="tdType">
                                   {item.type}
                                </td>
                                <td className="tdTitle">
                                    {item.title}
                                </td>
                                <td className="tdPrice">
                                    {item.price}
                                </td>
                                <td className="tdSaleqty">
                                    {item.saleqty}
                                </td>
                                <td className="tdDate">
                                    {item.date.slice(0,10)}
                                </td>
                                <td className="tdButton">
                                <button onClick={this.deleteGoods.bind(this, item)}>删除</button>
                                </td>
                                
                            
                                
                             </tr>

                           
                            </tbody>
                            
                        )
                    })
                }

                 </table>

                 <div className="pages">
                    <Pagination showQuickJumper defaultCurrent={2} total={this.props.totalcount} onChange={this.onChange.bind(this)} />
                </div>
            </div>
        )
    }
} 
//store.getSate() => state
let mapStateToProps = (state) => {
    console.log(state)
    return {
        ajaxStatus: state.goods.status,
        ajaxResult: state.goods.result || [],
        totalcount: state.goods.totalcount === undefined ? [] : state.goods.totalcount[0].rowscount,
        ajaxbigtype:state.goods.bigtype,
        
    }
}

export default connect(mapStateToProps, actions)(GoodsComponent);

