import React from 'react'
import SearchBar from 'components/searchbar'
import Table from 'components/table'
import 'whatwg-fetch'
import moment from 'moment'
import { Button, message, Modal } from 'antd'
import { FormModal } from 'components/modalForm'
import { musicKindList, languageKindList, publishCountry } from '../../utils/config'
import { fetchGoodsList } from 'actions/goods'
import { connect } from 'react-redux'
import './index.less'

require('es6-promise').polyfill();

const confirm = Modal.confirm
@connect(
    (state) => ({
       goodsList: state.goodsList,
    })
)

export default class Goods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tData: [],
            item: {},
            loading: true,
            modalShow: false,
            modalShowEdit: false,
        }
    }

    componentDidMount() {
        fetchGoodsList({  // 默认是热歌版
            method: 'POST',
            size: 100,
            type: 2,
        })(this.props.dispatch)
    }


    fetchTableData = (value) => {
        fetchGoodsList({
            method: 'POST',
            size: 100,
            type: value,
        })(this.props.dispatch)
    }

    onSearch = (searchFields) => {
        this.setState({ // 这端代码只是起模拟筛选作用
            searchFields: searchFields,
        })
    }

    searchFields = () => {
        return [{
            title: '商品分类',
            key: 'type',
            type: 'select',
            defaultValue: 2,
            onChange: (value) => this.fetchTableData(value),
            items: () => musicKindList.map(ele => ({
                value: ele.value,
                mean: ele.mean
            })),
        }, {
            title: '鲜花类型',
            key: 'country',
            type: 'select',
            defaultValue: '全部',
            items: () => publishCountry.map(ele => ({
                value: ele.value,
                mean: ele.mean
            })),
        }, {
            title: '活动类型',
            key: 'language',
            type: 'select',
            defaultValue: '全部',
            items: () => languageKindList.map(ele => ({
                value: ele.value,
                mean: ele.mean
            })),
        }, {
            title: '发行时间段',
            key: ['start', 'end'],
            type: 'rangePicker',
        }]
    }

    tableHeader = () => {
        return [{
            dataIndex: 'title',
            title: '商品类型',
            width: 200,
        }, {
            dataIndex: 'author',
            title: '商品描述',
            width: 200,
        }, {
            dataIndex: 'country',
            title: '价格',
            width: 200,
        }, {
            dataIndex: 'language',
            title: '库存',
            width: 200,
        }, {
            dataIndex: 'publishtime',
            title: '发行时间',
            width: 200,
        }, ]
    }

    add = () => {
        this.setState({
            modalShow: true
        })
    }

    onOk = (param) => {
        message.success('添加成功')
        this.onCancel()
    }

    onCancel = () => {
        this.setState({
            modalShow: false
        })
    }

    onOkEdit = (param) => {
        this.setState({
            modalShowEdit: false
        })
        message.success('编辑成功')
    }

    onCancelEdit = () => {
        this.setState({
            modalShowEdit: false
        })
    }

    tableAction = (actionKey, item) => {
        if (actionKey === 'edit') {
            this.setState({
                item: item,
                modalShowEdit: true
            })
        } else if (actionKey === 'delete') {
            confirm({
                title: '提示',
                content: '确定删除吗',
                onOk: () => {
                    message.success('删除成功')
                },
                onCancel() {}
            })
        }
    }

    fields = () => {
        return [{
            label: '商品类型',
            type: 'input',
            name: 'title',
            options: {
                rules: [{
                    required: true,
                    message: '商品类型必输!',
                }]
            }
        }, {
            label: '商品描述',
            type: 'input',
            name: 'author',
            options: {
                rules: [{
                    required: true,
                    message: '商品描述必输!',
                }]
            }
        }, {
            label: '价格',
            type: 'select',
            name: 'country',
            items: () => publishCountry.map(ele => ({
                key: ele.value,
                value: ele.mean
            })),
            options: {
                rules: [{
                    required: true,
                    message: '价格必输!',
                }]
            }
        }, {
            label: '库存',
            type: 'select',
            name: 'language',
            items: () => languageKindList.map(ele => ({
                key: ele.value,
                value: ele.mean
            })),
            options: {
                rules: [{
                    required: true,
                    message: '库存必输!',
                }]
            }
        }, {
            label: '发行时间',
            type: 'datetime',
            name: 'publishTime',
            options: {
                rules: [{
                    required: true,
                    message: '发行时间必输!',
                }]
            }
        }]
    }

    fieldsEdit = () => {
        const item = this.state.item
        return [{
            label: '商品类型',
            type: 'input',
            name: 'title',
            items: item.title,
            options: {
                initialValue: item.title,
                rules: [{
                    required: true,
                    message: '商品类型必输!',
                }]
            }
        }, {
            label: '商品描述',
            type: 'input',
            name: 'author',
            options: {
                initialValue: item.author,
                rules: [{
                    required: true,
                    message: '商品描述必输!',
                }]
            }
        }, {
            label: '价格',
            type: 'select',
            name: 'country',
            items: () => publishCountry.map(ele => ({
                key: ele.value,
                value: ele.mean
            })),
            options: {
                initialValue: item.country,
                rules: [{
                    required: true,
                    message: '价格必输!',
                }]
            }
        }, {
            label: '库存',
            type: 'select',
            name: 'language',
            items: () => languageKindList.map(ele => ({
                key: ele.value,
                value: ele.mean
            })),
            options: {
                initialValue: item.language,
                rules: [{
                    required: true,
                    message: '库存必输!',
                }]
            }
        }, {
            label: '发行时间',
            type: 'datetime',
            name: 'publishTime',
            options: {
                initialValue: moment(item.publishtime),
                rules: [{
                    required: true,
                    message: '发行时间必输!',
                }]
            }
        }]
    }

    render() {
        const { goodsList } = this.props
        const songArray = []
        let songList = goodsList.data

        const searchFields = this.state.searchFields
        if (searchFields && searchFields.country && searchFields.country.toString() !== '0') { // 发行国家搜索
            // eslint-disable-next-line
            songList = songList.filter(ele => ele.country === publishCountry.find(t => t.value === parseInt(searchFields.country), 10).mean)
        }
        if (searchFields && searchFields.language && searchFields.language.toString() !== '0') { // 歌曲语种搜索
            // eslint-disable-next-line
            songList = songList.filter(ele => ele.language === languageKindList.find(t => t.value === parseInt(searchFields.language), 10).mean)
        }
        if (searchFields && searchFields.start) { // 发行时间段收索
            songList = songList.filter(ele => moment(ele.publishtime) >= moment(searchFields.start) && moment(ele.publishtime) <= moment(searchFields.end))
        }

        if(songList) {
            for (let i = 0; i < songList.length; i++) {
                songArray.push({
                    title: songList[i].title,
                    author: songList[i].author,
                    country: songList[i].country,
                    language: songList[i].language,
                    publishtime: songList[i].publishtime,
                })
            }
        }
        return (
            <div id="wrap">
                <SearchBar
                    onSubmit={this.onSearch}
                    fields={this.searchFields()}/>
                <div className="tableBox">
                    <Button onClick={this.add} className="addButton">添加</Button>
                    <div style={{ paddingTop: 43 }}>
                        <Table
                            onCtrlClick={ this.tableAction }
                            pagination={ true }
                            pageSize={10}
                            header={ this.tableHeader() }
                            data={ songArray }
                            loading={ goodsList.loading }
                            action={row => [{
                                key: 'edit',
                                name: '修改',
                                color: 'blue',
                                icon: 'edit',
                            }, {
                                key: 'delete',
                                name: '删除',
                                color: 'red',
                                icon: 'delete'
                            }]}
                            scroll={{y: 385 }}/>
                    </div>
                </div>
                <FormModal
                    modalKey="add"
                    visible={this.state.modalShow}
                    title="添加商品"
                    fields={this.fields()}
                    onOk={this.onOk}
                    onCancel={this.onCancel}
                    okText="保存"/>
                <FormModal
                    modalKey="Edit"
                    visible={this.state.modalShowEdit}
                    title="修改商品"
                    fields={this.fieldsEdit()}
                    onOk={this.onOkEdit}
                    onCancel={this.onCancelEdit}
                    okText="保存"/>
            </div>
        )
    }
}