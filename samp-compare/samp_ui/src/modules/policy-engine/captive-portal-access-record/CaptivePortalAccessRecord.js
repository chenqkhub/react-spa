import React, { Component } from 'react';
import { Button, Input, Row, Col, Table, Drawer, Icon } from 'antd'
import store from '././../../../stores/store'
import { deleteDisbaled, editDisbaled, listData, createColumn, deleteShow, detailShow, selectedSize, selectedItem, pageSize, currentPage } from '../../../actions/captive-access-record/actionCreator'
import columns from './CaptivePortalAccessRecordTableConfig'
import CaptivePortalAccessRecordDetail from './CaptivePortalAccessRecordDetail'
const ButtonGroup = Button.Group;
const { Search } = Input;
class CaptivePortalAccessRecord extends Component {
    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState().authenticationStrategyReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState().authenticationStrategyReducer)
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
                "id": 1, "key": "1", "portalType": "Guest", "nadIP": "2", "nadMAC": "DC0856000D50", "sysCycle": "123141", "associationSSID": "222-liu-wechat",
                "ssid": "222-liu-wechat", "deviceOSGroup": "Default-Group", "tableName": "Guest", "browserType": "Chrome", "loginTime": 1571280602225, "rejectReason": "",
                "browserGroup": "", "auditIP": "172.16.101.76", "nadID": "43243", "createTableDaily": "", "deviceMac": "DC0856000D50", "userip": "172.16.101.76",
                "browserName": "Chrome", "dbServer": "", "portalPage": "Default Portal", "deviceType": "HUAWEI", "deviceIp": "172.16.21.222", "deviceIpv6": "", "authenticationResult": "SUCCESS",
                "deviceOS": "Y-TR", "successRedirect": "Go to success page", "userAgent": "", "deviceFamily": "HUAWEI", "deviceOSCorp": "", "logoutTime": 1571280602225, "deviceCategory": "Phone",
                "recordTime": 1571280602225, "authResult": "", "authenticationType": "MAC+pORTAL", "deviceBrand": ""
            },
        ]

        store.dispatch(listData(list))
        store.dispatch(createColumn(columns))
    }
    //刷新
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
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            //record代表当前选中的对象，selected代表true/false，selectedRows数组表示当前选中的所有数据
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows)
                selectedRows.length === 1 ?
                    store.dispatch(editDisbaled(false)) : store.dispatch(editDisbaled(true))
                selectedRows.length >= 1 ?
                    store.dispatch(deleteDisbaled(false)) : store.dispatch(deleteDisbaled(true))

                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
                console.log(this.state);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                selectedRows.length >= 1 ? store.dispatch(deleteDisbaled(false)) : store.dispatch(deleteDisbaled(true))
            },
        };
        return (
            <div>
                <Row>
                    <Col span={14}>
                        <span className="lamp-table-list-header">
                            Captive Portal Access Record List
                        </span>
                    </Col>
                    <Col span={10} style={{ textAlign: "right" }} onClick={this.refresh}>
                        <Button type="primary">
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
                <Drawer
                    title="Captive Portal Access Record Detail"
                    width={600}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <CaptivePortalAccessRecordDetail item={this.state.selectedItem} />

                    <div className="samp_detail_drawer_style">
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Return
                        </Button>
                    </div>
                </Drawer>
                {/* <Modal
                    title="Delete Captive Access Polic"
                    visible={this.state.isShowModal}
                    onOk={this.deleteItem}
                    onCancel={this.cancelDelete}
                >
                    <p>Are you sure delete  {this.state.selectedSize} items ?</p>
                </Modal> */}
            </div>
        );
    }
}

export default CaptivePortalAccessRecord;