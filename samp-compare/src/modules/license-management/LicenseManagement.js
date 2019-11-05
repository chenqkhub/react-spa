import React, { Component } from 'react';
import { Button, Icon, Input, Row, Col, Table, Drawer, Modal, Upload } from 'antd'
import store from '././../../stores/store'
import { deleteDisbaled, editDisbaled, listData, createColumn, deleteShow, pageSize, currentPage } from '../../actions/license-management/actionCreator'
import columns from './LicenseManagementTableConfig'
class LicenseManagement extends Component {
    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState().companyPropertyReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState().companyPropertyReducer)
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

        const pagination = { ...this.state.pagination };
        pagination.total = this.state.list.length;
        const list = [
            {
                "id": 1,"key":"1", "license": "OV2500-NM, !CLRdSUp-wvNzK2x@-4qX$T99z-BBXr#G#4-7C!GhL1r-$c83BBq9-WaqdDUUt-8z$L&g7W", "activateTime": 1571210539359, "expirationDate": 1671210539359

            }
        ]
        store.dispatch(listData(list))
        store.dispatch(createColumn(columns))
    }
    handleTableChange = (pagination, filters, sorter) => {
        store.dispatch(pageSize(pagination.pageSize))
        store.dispatch(currentPage(pagination.current))
    };
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <span className="lamp-table-list-header">
                            License Management
                        </span>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={4} offset={3} style={{ textAlign: "right" }}>License Serial Number: </Col>
                    <Col span={12}>
                        <Input style={{ marginLeft: "5px" }} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={24} style={{ textAlign: "center" }}>
                        <Button type="primary">Check</Button>
                    </Col>
                </Row>
                <br />
                <Table bordered rowKey={record => record.uid}
                    dataSource={this.state.list}
                    columns={this.state.columns}
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
                />;
            </div>
        );
    }
}

export default LicenseManagement;