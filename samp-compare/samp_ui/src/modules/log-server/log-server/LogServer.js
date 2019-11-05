import React, { Component } from 'react';
import { Button, Icon, Input, Row, Col, Table, Drawer, Modal } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios'
import store from '././../../../stores/store'
import { downloadDisbaled, downloadAllDisbaled, listData, createColumn, deleteShow, detailShow, selectedSize, selectedItem, pageSize, currentPage, tableDetail } from '../../../actions/log-server/actionCreator'
import LogServerDetail from './LogServerDetail'
import columns from './LogServerTableConfig'
const ButtonGroup = Button.Group;
const { Search } = Input;

class LogServer extends Component {
    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState().logServerReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
        console.log("this.state", this.state)
    }
    storeChange = () => {
        this.setState(store.getState().logServerReducer)
    }

    //组件渲染成功后，调用接口去后台请求数据
    componentDidMount() {
        this.getData();
    }
    //组件销毁前调用，清除一些事件(比如定时事件)
    componentWillUnmount() {
        store.dispatch(pageSize(5))
        store.dispatch(currentPage(1))
        this.setState = (state, callback) => {
            return
        }
    }
    //组件销毁前调用，清除一些事件(比如定时事件)
    componentWillUnmount() {
        store.dispatch(pageSize(5))
        store.dispatch(currentPage(1))
        this.setState = (state, callback) => {
            return
        }
    }

    //在这里请求后台服务并设置list，page
    getData = () => {
        this.setState({ loading: true });
        // axios.get('/api/ham/radius/client/getClientList')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });


        const list = [
            {
                "id": 6, "key": "6", "actualname": "upam.log", "displayname": "upam", "nameToCompare": "upam"
            }
        ]
        // Read total count from server
        // pagination.total = data.totalCount;
        store.dispatch(listData(list))
        store.dispatch(createColumn(columns))
    }
    //刷新
    refresh = () => {
        this.getData()
    }
    //处理表格中事件变化
    handleTableChange = (pagination, filters, sorter) => {
        console.log(pagination, filters, sorter)
        store.dispatch(pageSize(pagination.pageSize))
        store.dispatch(currentPage(pagination.current))
    };
    //选中数据时，显示详情
    showRow = (record, rowIndex) => {
        store.dispatch(tableDetail("detail"))
        store.dispatch(selectedItem(record))
        store.dispatch(detailShow(true))
    }
    //关闭详情页时，重置visible
    onClose = () => {
        store.dispatch(detailShow(false))
    }
    //显示modal
    showModal = () => {
        store.dispatch(deleteShow(true))
    }
    deleteItem = () => {
        //删除操作执行成功后
        store.dispatch(deleteShow(false))
    }
    cancelDelete = () => {
        store.dispatch(deleteShow(false))
    }
    //改变mode
    changeMode = () => {
        store.dispatch(tableDetail("table"))
    }
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            //record代表当前选中的对象，selected代表true/false，selectedRows数组表示当前选中的所有数据
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows)
                selectedRows.length === 1 ?
                    store.dispatch(downloadDisbaled(false)) : store.dispatch(downloadDisbaled(true))
                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
                console.log(this.state);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                selectedRows.length == 1 ? store.dispatch(downloadDisbaled(false)) : store.dispatch(downloadDisbaled(true))
                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
        };
        return (
            <div>
                <Row>
                    <Col span={14}>
                        <span className="lamp-table-list-header">
                            Log Server List
                        </span>
                    </Col>
                    <Col span={10} style={{ textAlign: "right" }}>
                        <Button type="primary">
                            <Icon type="download"></Icon>Download All
                        </Button>
                        <Button type="primary" disabled={this.state.downloadFlag} style={{ marginLeft: "5px" }}>
                            <Icon type="download"></Icon>Download
                        </Button>
                        <Button type="primary" style={{ marginLeft: "5px" }} onClick={this.refresh}>
                            <Icon type="sync"></Icon>
                        </Button>
                    </Col>
                </Row>
                <br />
                {
                    this.state.tableDetail === "table" ?
                        <div>
                            <Row >
                                <Col span={24}>
                                    <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                                </Col>
                            </Row>
                            <br />
                        </div>
                        : ""
                }

                {
                    this.state.tableDetail === "table" ?
                        <Table bordered rowKey={record => record.uid}
                            dataSource={this.state.list}
                            columns={this.state.columns}
                            rowSelection={rowSelection}
                            showHeader={false}
                            pagination={{
                                showSizeChanger: true,
                                // showQuickJumper: true,
                                total: this.state.list.length, // 数据总数
                                pageSize: this.state.pageSize, // 每页条数
                                current: this.state.current, // 当前页码
                                showTotal: ((total) => {
                                    return `Total: ${total} items`;
                                })
                            }}
                            loading={this.state.loading}
                            onChange={this.handleTableChange}
                            onRow={(record, rowkey) => {
                                return {
                                    onClick: this.showRow.bind(this, record, rowkey)
                                }
                            }} /> :
                        <div style={{ width: "100%" }}>
                            <Button type="primary" onClick={this.changeMode}><Icon type="arrow-left" />Back</Button><br /><br />
                            <LogServerDetail item={this.state.selectedItem} />
                        </div>
                }
                <Modal
                    title="Delete Item"
                    visible={this.state.isShowModal}
                    onOk={this.deleteItem}
                    onCancel={this.cancelDelete}
                >
                    <p>Are you sure delete  {this.state.selectedSize} items ?</p>
                </Modal>
            </div>

        );
    }
}

export default LogServer;