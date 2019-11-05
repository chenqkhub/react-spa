import React, { Component } from 'react';
import { Button, Input, Row, Col, Table, Drawer, Modal, Tabs, Icon } from 'antd'
import axios from 'axios'
import store from '././../../../stores/store'
import { deleteDisbaled, listData, createColumn, deleteShow, detailShow, selectedSize, selectedItem, pageSize, currentPage } from '../../../actions/remember-device/actionCreator'
import columns from './RememberDeviceTableConfig'
import RememberDeviceDetail from './RememberDeviceDetail'
const { TabPane } = Tabs;
const { Search } = Input;
const byod_list = [
    {
        "id": 1, "accessDeviceLocation": null, "deviceMAC": "DC0856000D50", "deviceCategory": "AP-0D:50", "deviceOS": "222-liu-wechat", "deviceFamily": "HUAWEI",
        "browserType": "Chrome", "account": "90F05268163A", "status": "Guest", "rememberedTime": "1434324", "rememberMethod": "call-check",
        "activeStatus": "", "description": "", "accessRoleProfile": "default arp", "policyList": "default-pl", "accountInterimInterval": "", "sessionTimeout": "",
        "upstreamBandwidth": "43423", "downstreamBandwidth": "43", "accessInformation": "", "lastAuthenticationTime": "", "lastAccessDeviceMAC": "DC0856000D50",
        "lastAccessDeviceName": "321314", "lastAccessDeviceSSID": "ssid-chenqk", "lastAccessDeviceLocation": "",
    },
]
const guest_list = [
    {
        "id": 1, "accessDeviceLocation": null, "deviceMAC": "DC0856000D51", "deviceCategory": "AP-0D:51", "deviceOS": "chenqk", "deviceFamily": "HUAWEI",
        "browserType": "Chrome", "account": "90F05268163A", "status": "Guest", "rememberedTime": "1434324", "rememberMethod": "call-check",
        "activeStatus": "", "description": "", "accessRoleProfile": "default arp", "policyList": "default-pl", "accountInterimInterval": "", "sessionTimeout": "",
        "upstreamBandwidth": "43423", "downstreamBandwidth": "43", "accessInformation": "", "lastAuthenticationTime": "", "lastAccessDeviceMAC": "DC0856000D50",
        "lastAccessDeviceName": "321314", "lastAccessDeviceSSID": "ssid-chenqk", "lastAccessDeviceLocation": "",
    },
]
class RememberDevice extends Component {
    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState().rememberDeviceReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState().rememberDeviceReducer)
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
        store.dispatch(listData(byod_list))
        store.dispatch(createColumn(columns))
    }
    //刷新按钮
    refresh = () => {
        this.getData()
    }
    handleTableChange = (pagination, filters, sorter) => {
        store.dispatch(pageSize(pagination.pageSize))
        store.dispatch(currentPage(pagination.current))
    };

    //选中数据时，显示详情
    showRow = (record, rowIndex) => {
        store.dispatch(selectedItem(record))
        store.dispatch(detailShow(true))
    }
    //关闭详情页时，重置visible
    onClose = () => {
        store.dispatch(detailShow(false))
    }
    //显示删除modal
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
    //改变tabs，调用的方法
    changeTheTabs = (key) => {
        store.dispatch(selectedItem([]))
        store.dispatch(selectedSize(0))
        store.dispatch(deleteDisbaled(true))
        //请求数据
        console.log(key);
        if (key === "1") {
            store.dispatch(listData(byod_list))
        } else if (key === "2") {
            store.dispatch(listData(guest_list))
        }
    }
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            //record代表当前选中的对象，selected代表true/false，selectedRows数组表示当前选中的所有数据
            onSelect: (record, selected, selectedRows) => {
                selectedRows.length >= 1 ?
                    store.dispatch(deleteDisbaled(false)) : store.dispatch(deleteDisbaled(true))
                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                selectedRows.length >= 1 ? store.dispatch(deleteDisbaled(false)) : store.dispatch(deleteDisbaled(true))
                store.dispatch(selectedSize(selectedRows.length))
            },
        };
        return (
            <div>
                <Row>
                    <Col span={14}>
                        <span className="lamp-table-list-header">
                            Remembered Devices List
                        </span>
                    </Col>
                    <Col span={10} style={{ textAlign: "right" }}>
                        <Button type="primary" onClick={this.showModal} icon="delete" disabled={this.state.deleteFlag}></Button>
                        <Button type="primary" style={{ marginLeft: "5px" }} onClick={this.refresh}>
                            <Icon type="sync"></Icon>
                        </Button>
                    </Col>
                </Row>
                <br />
                <Row >
                    <Col span={24}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    </Col>
                </Row>
                <br />
                <Tabs defaultActiveKey="1" onChange={this.changeTheTabs}>
                    <TabPane tab="BYOD Remembered Devices" key="1">

                        <Table bordered rowKey={record => record.uid}
                            dataSource={this.state.list}
                            columns={this.state.columns}
                            rowSelection={rowSelection}
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
                            }} />;
                    </TabPane>
                    <TabPane tab="Guest Remembered Devices" key="2">

                        <Table bordered rowKey={record => record.uid}
                            dataSource={this.state.list}
                            columns={this.state.columns}
                            rowSelection={rowSelection}
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
                            }} />;
                    </TabPane>

                </Tabs>
                <Drawer
                    title="Remembered Device Detail"
                    width={600}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <RememberDeviceDetail item={this.state.selectedItem} />

                    <div className="samp_detail_drawer_style">
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Return
                        </Button>
                    </div>
                </Drawer>
                <Modal
                    title="Delete Remembered Device"
                    visible={this.state.isShowModal}
                    onOk={this.kickoffItem}
                    onCancel={this.cancelDelete}
                >
                    <p>Are you sure delete  {this.state.selectedSize} items ?</p>
                </Modal>
            </div>
        );
    }
}

export default RememberDevice;