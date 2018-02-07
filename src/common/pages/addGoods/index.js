import React,{Component} from 'react'
import http from '../../utils/reqAjax.js'

import './index.less'

export default class AddPro extends Component{
    addTo(){
        let thetitle = this.refs.thetitle.value;
        let thebigtype = this.refs.thebigtype.value;
        let thesmalltype = this.refs.thesmalltype.value;
        let theprice = this.refs.theprice.value;
        let thesaleprice = this.refs.thesaleprice.value;
        let thesaleqty = this.refs.thesaleqty.value;
        let thehot = this.refs.thehot.value;
        let themainimg = this.refs.themainimg.value;
        let thedetailsimg = this.refs.thedetailsimg.value;
        let thecolor = this.refs.thecolor.value;
        let theqty = this.refs.theqty.value;
        http.post({url:'addPro',params:{title:thetitle,bigtype:thebigtype,smalltype:thesmalltype,price:theprice,saleprice:thesaleprice,saleqty:thesaleqty,hot:thehot,mainimg:themainimg,detailsimg:thedetailsimg,color:thecolor,qty:theqty}}).then(res =>{
            if(res.data.status){
                alert('添加成功');
                for(var item in this.refs){
                    this.refs[item].value = ''
                }
            }else{
                alert('请检查输入格式是否正确');
            }
        })
    }
    render(){
        return(
            <div id="addpro">
                <label htmlFor="thetitle">title:</label>
                <input type="text" ref="thetitle" id="thetitle" /><br />
                <label htmlFor="thebigtype">bigtype:</label>
                <input type="text" ref="thebigtype" id="thebigtype" /><br />
                <label htmlFor="thesmalltype">smalltype:</label>
                <input type="text" ref="thesmalltype" id="thesmalltype" /><br />
                <label htmlFor="theprice">price:</label>
                <input type="text" ref="theprice" id="theprice" /><br />
                <label htmlFor="thesaleprice">saleprice:</label>
                <input type="text" ref="thesaleprice" id="thesaleprice" /><br />
                <label htmlFor="thesaleqty">saleqty:</label>
                <input type="text" ref="thesaleqty" id="thesaleqty" /><br />
                <label htmlFor="thehot">hot:</label>
                <input type="text" ref="thehot" id="thehot" /><br />
                <label htmlFor="themainimg">mainimg:</label>
                <input type="text" ref="themainimg" id="themainimg" /><br />
                <label htmlFor="thedetailsimg">detailsimg:</label>
                <input type="text" ref="thedetailsimg" id="thedetailsimg" /><br />
                <label htmlFor="thecolor">color:</label>
                <input type="text" ref="thecolor" id="thecolor" /><br />
                <label htmlFor="theqty">qty:</label>
                <input type="text" ref="theqty" id="theqty" /><br />
                <button onClick={this.addTo.bind(this)}>添加</button>
            </div>
        )
    }
}
