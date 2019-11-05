import React, { Component } from 'react';
import { Button, Input, Row, Col, Table, Drawer, Modal, Tabs, Icon } from 'antd'
import axios from 'axios'
import store from '././../../../stores/store'
import { kickOffDisbaled, listData, createColumn, deleteShow, detailShow, selectedSize, selectedItem, kickOff, pageSize, currentPage } from '../../../actions/online-device/actionCreator'
import columns from './OnlineDeviceTableConfig'
import OnlineDeviceDetail from './OnlineDeviceDetail'
const { TabPane } = Tabs;
const { Search } = Input;
const byod_list = [
    {
        "id": 1, "accessDeviceLocation": null, "accessDeviceMac": "DC0856000D50", "accessDeviceName": "AP-0D:50", "accessDeviceSsid": "222-liu-wechat",
        "accessPolicy": "222-liu-wechat", "account": "90F05268163A", "accountType": "BYOD", "acctInputGigawords": "", "acctInputOctets": "", "acctInputPackets": "",
        "acctInterimInterval": "", "acctMultiSessionId": "172.16.101.76_06/08/2019_16:32:36_90f05268163a", "acctOutputGigawords": "", "acctOutputOctets": "",
        "acctOutputPackets": "", "acctSessionId": "172.16.101.76_06/08/2019_16:32:36_90f05268163a", "acctStatusType": "", "acctTerminateCause": "Session timeout",
        "alcatelAPGroup": "default group", "authResource": "None", "authType": "MAC", "authenticationMethod": "PAP", "authenticationStrategy": "222-liu-wechat",
        "calledStationId": "DC0856000D50:222-liu-wechat", "coaErrorCause": "", "coaStatus": "", "deviceIP": "", "deviceIPv6": "", "deviceMAC": "90F05268163A",
        "expireTime": 0, "filterId": "", "finalfilterId": "", "framedMtu": 1400, "nasId": "222-liu-wechat", "nasIp": "172.16.101.76", "nasPort": 2, "nasPortId": "wifi-5G",
        "nasPortType": "Wireless", "nasSourceIP": "172.16.101.76", "policyList": "", "portDesc": "222-liu-wechat", "recordID": "1564534033910_null", "redirectIpv6Url": "",
        "redirectUrl": "https://ov2500-upam-cportal.al-enterprise.com:443/portal_UI/65d9d2225c421bbfd855e644ae3a0134/login.html?mac=90F05268163A",
        "rejectReason": "", "roamingInformation": "", "serviceType": "Call-Check", "sessionStart": "1564534033911", "sessionStop": "1564642800177", "sessionTime": "1D 6H 12Min 46s",
        "sessionTimeout": "", "slotPort": "", "status": "", "terminationAction": "", "tunnelPrivateGroupID": "", "webAccessStrategy": "", "wisprBandwidthMaxDown": "", "wisprBandwidthMaxUp": "",
    },
]
const guest_list = [
    {
        "id": 1, "accessDeviceLocation": null, "accessDeviceMac": "DC0856000D50", "accessDeviceName": "AP-0D:50", "accessDeviceSsid": "222-liu-wechat",
        "accessPolicy": "222-liu-wechat", "account": "90F05268163A", "accountType": "Guest", "acctInputGigawords": "", "acctInputOctets": "", "acctInputPackets": "",
        "acctInterimInterval": "", "acctMultiSessionId": "172.16.101.76_06/08/2019_16:32:36_90f05268163a", "acctOutputGigawords": "", "acctOutputOctets": "",
        "acctOutputPackets": "", "acctSessionId": "172.16.101.76_06/08/2019_16:32:36_90f05268163a", "acctStatusType": "", "acctTerminateCause": "Session timeout",
        "alcatelAPGroup": "default group", "authResource": "None", "authType": "MAC", "authenticationMethod": "PAP", "authenticationStrategy": "222-liu-wechat",
        "calledStationId": "DC0856000D50:222-liu-wechat", "coaErrorCause": "", "coaStatus": "", "deviceIP": "", "deviceIPv6": "", "deviceMAC": "90F05268163A",
        "expireTime": 0, "filterId": "", "finalfilterId": "", "framedMtu": 1400, "nasId": "222-liu-wechat", "nasIp": "172.16.101.76", "nasPort": 2, "nasPortId": "wifi-5G",
        "nasPortType": "Wireless", "nasSourceIP": "172.16.101.76", "policyList": "", "portDesc": "222-liu-wechat", "recordID": "1564534033910_null", "redirectIpv6Url": "",
        "redirectUrl": "https://ov2500-upam-cportal.al-enterprise.com:443/portal_UI/65d9d2225c421bbfd855e644ae3a0134/login.html?mac=90F05268163A",
        "rejectReason": "", "roamingInformation": "", "serviceType": "Call-Check", "sessionStart": "1564534033911", "sessionStop": "1564642800177", "sessionTime": "1D 6H 12Min 46s",
        "sessionTimeout": "", "slotPort": "", "status": "", "terminationAction": "", "tunnelPrivateGroupID": "", "webAccessStrategy": "", "wisprBandwidthMaxDown": "", "wisprBandwidthMaxUp": "",
    },
]
const company_list = [
    {
        "id": 1, "accessDeviceLocation": null, "accessDeviceMac": "DC0856000D50", "accessDeviceName": "AP-0D:50", "accessDeviceSsid": "222-liu-wechat",
        "accessPolicy": "222-liu-wechat", "account": "90F05268163A", "accountType": "Company Property", "acctInputGigawords": "", "acctInputOctets": "", "acctInputPackets": "",
        "acctInterimInterval": "", "acctMultiSessionId": "172.16.101.76_06/08/2019_16:32:36_90f05268163a", "acctOutputGigawords": "", "acctOutputOctets": "",
        "acctOutputPackets": "", "acctSessionId": "172.16.101.76_06/08/2019_16:32:36_90f05268163a", "acctStatusType": "", "acctTerminateCause": "Session timeout",
        "alcatelAPGroup": "default group", "authResource": "None", "authType": "MAC", "authenticationMethod": "PAP", "authenticationStrategy": "222-liu-wechat",
        "calledStationId": "DC0856000D50:222-liu-wechat", "coaErrorCause": "", "coaStatus": "", "deviceIP": "", "deviceIPv6": "", "deviceMAC": "90F05268163A",
        "expireTime": 0, "filterId": "", "finalfilterId": "", "framedMtu": 1400, "nasId": "222-liu-wechat", "nasIp": "172.16.101.76", "nasPort": 2, "nasPortId": "wifi-5G",
        "nasPortType": "Wireless", "nasSourceIP": "172.16.101.76", "policyList": "", "portDesc": "222-liu-wechat", "recordID": "1564534033910_null", "redirectIpv6Url": "",
        "redirectUrl": "https://ov2500-upam-cportal.al-enterprise.com:443/portal_UI/65d9d2225c421bbfd855e644ae3a0134/login.html?mac=90F05268163A",
        "rejectReason": "", "roamingInformation": "", "serviceType": "Call-Check", "sessionStart": "1564534033911", "sessionStop": "1564642800177", "sessionTime": "1D 6H 12Min 46s",
        "sessionTimeout": "", "slotPort": "", "status": "", "terminationAction": "", "tunnelPrivateGroupID": "", "webAccessStrategy": "", "wisprBandwidthMaxDown": "", "wisprBandwidthMaxUp": "",
    },
]
class OnlineDevice extends Component {
    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState().onlineDeviceReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState().onlineDeviceReducer)
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
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
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
    //改变tabs，调用的方法
    changeTheTabs = (key) => {
        store.dispatch(selectedItem([]))
        store.dispatch(selectedSize(0))
        store.dispatch(kickOffDisbaled(true))
        //请求数据
        console.log(key);
        if (key === "1") {
            store.dispatch(listData(byod_list))
        } else if (key === "2") {
            store.dispatch(listData(guest_list))
        } else if (key === "3") {
            store.dispatch(listData(company_list))
        }
    }
    //kick off
    showKickOff = () => {
        store.dispatch(kickOff(true))
    }
    //隐藏
    kickoffItem = () => {
        store.dispatch(kickOff(false))
    }
    cancelKickoff = () => {
        store.dispatch(kickOff(false))
    }

    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            //record代表当前选中的对象，selected代表true/false，selectedRows数组表示当前选中的所有数据
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows.length)
                selectedRows.length >= 1 ?
                    store.dispatch(kickOffDisbaled(false)) : store.dispatch(kickOffDisbaled(true))

                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                selectedRows.length >= 1 ? store.dispatch(kickOffDisbaled(false)) : store.dispatch(kickOffDisbaled(true))
                store.dispatch(selectedSize(selectedRows.length))
            },
        };
        return (
            <div>
                <Row>
                    <Col span={14}>
                        <span className="lamp-table-list-header">
                            Online Devices List
                        </span>
                    </Col>
                    <Col span={10} style={{ textAlign: "right" }}>
                        <Button type="primary" onClick={this.showKickOff} disabled={this.state.kickoffFlag}>Kick Off</Button>
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
                    <TabPane tab="BYOD Online Devices" key="1">

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
                    <TabPane tab="Guest Online Devices" key="2">

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
                    <TabPane tab="Company Online Devices" key="3">

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
                    title="Online Device Detail"
                    width={600}
                    height={2000}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <OnlineDeviceDetail item={this.state.selectedItem} />

                    <div className="samp_detail_drawer_style">
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Return
                        </Button>
                    </div>
                </Drawer>
                <Modal
                    title="Kick Off Online Device"
                    visible={this.state.isShowModal}
                    onOk={this.kickoffItem}
                    onCancel={this.cancelKickoff}
                >
                    <p>Are you sure Kick Off  {this.state.selectedSize} items ?</p>
                </Modal>
            </div>
        );
    }
}

export default OnlineDevice;