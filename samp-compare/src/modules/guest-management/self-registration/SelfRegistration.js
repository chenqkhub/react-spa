import React, { Component } from 'react';
import { Button, Icon, Input, Row, Col, Table, Drawer, Modal, Tabs } from 'antd'
import _ from 'lodash'
import store from '././../../../stores/store'
import { deleteDisbaled, listData, copyData, createColumn, deleteShow, detailShow, selectedSize, selectedItem, approveDisabled, rejectDisabled, rejectItem, approveItem, pageSize, currentPage } from '../../../actions/self-registration/actionCreator'
import columns from './SelfRegistrationTableConfig'
import GuestOperatorDetail from './SelfRegistrationDetail'
const { Search } = Input;
const ButtonGroup = Button.Group;
class GuestOperator extends Component {
    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState().selfRegistrationReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState().selfRegistrationReducer)
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
                "id": 1, "key": "1", "Description": "this is test information", "registerTime": 1571280602225,
                "email": "11111111111@1122.com", "visitorCompany": "qingkun.chen",
                "guestAccessStrategy": "Default Strategy", "visitReason": "beijing", "loginURL": "https://ov2500-upam-cportal.al-enterprise.com/login.html", "password": "123456",
                "telephone": "17245784857", "visitorName": "chenqk", "approve-chenqk": "", "approvalTime": 1571280602225, "visitEmployeeEmail": "chenqk@163.com", "employeeVisited": "",
                "status": "Unchecked"
            },
            {
                "id": 2, "key": "2", "Description": "this is test information", "registerTime": 1571280602225,
                "email": "11111111111@1122.com", "visitorCompany": "qingkun.chen",
                "guestAccessStrategy": "Default Strategy", "visitReason": "beijing", "loginURL": "https://ov2500-upam-cportal.al-enterprise.com/login.html", "password": "123456",
                "telephone": "17245784857", "visitorName": "chenqk", "unchecked-chenqk": "", "approvalTime": 1571280602225, "visitEmployeeEmail": "chenqk@163.com", "employeeVisited": "",
                "status": "Unchecked"
            },
            {
                "id": 2, "key": "3", "Description": "this is test information", "registerTime": 1571280602225,
                "email": "11111111111@1122.com", "visitorCompany": "qingkun.chen",
                "guestAccessStrategy": "Default Strategy", "visitReason": "beijing", "loginURL": "https://ov2500-upam-cportal.al-enterprise.com/login.html", "password": "123456",
                "telephone": "17245784857", "visitorName": "chenqk", "approved-chenqk": "", "approvalTime": 1571280602225, "visitEmployeeEmail": "chenqk@163.com", "employeeVisited": "",
                "status": "Approved"
            },
        ]
        store.dispatch(listData(list))
        //设置数据时，需要备份数据，在查询的时候需要重置数据
        store.dispatch(copyData(list))
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
    showDelete = () => {
        store.dispatch(deleteShow(true))
    }
    deleteItem = () => {
        //删除操作执行成功后
        store.dispatch(deleteShow(false))
    }
    cancelDelete = () => {
        store.dispatch(deleteShow(false))
    }
    //rejected
    showRejected = () => {
        store.dispatch(rejectItem(true))
    }
    cancelRejected = () => {
        store.dispatch(rejectItem(false))
    }
    rejectedItem = () => {
        store.dispatch(rejectItem(false))
    }
    //approved
    showApproved = () => {
        store.dispatch(approveItem(true))
    }
    cancelApproved = () => {
        store.dispatch(approveItem(false))
    }
    approvedItem = () => {
        store.dispatch(approveItem(false))
    }
    //根据条件过滤数据
    getDataByCondition = (value) => {
        console.log(value)
        let data = [];
        if (value === "All") {
            data = this.state.copyList
        } else {
            this.state.list.map((item) => {
                if (item.status === value) {
                    data.push(item)
                }
            })
        }

        console.log(data)
        store.dispatch(listData(data))
    }

    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            //record代表当前选中的对象，selected代表true/false，selectedRows数组表示当前选中的所有数据
            onSelect: (record, selected, selectedRows) => {
                let item_status = _.find(selectedRows, ["status", "Unchecked"])
                console.log(item_status)
                if (selectedRows.length === 0) {
                    store.dispatch(approveDisabled(true))
                    store.dispatch(rejectDisabled(true))
                    store.dispatch(deleteDisbaled(true))
                } else if (selectedRows.length >= 1) {
                    item_status ? store.dispatch(approveDisabled(false)) : store.dispatch(approveDisabled(true))
                    item_status ? store.dispatch(rejectDisabled(false)) : store.dispatch(rejectDisabled(true))
                    item_status ? store.dispatch(deleteDisbaled(true)) : store.dispatch(deleteDisbaled(false))
                }
                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                if (selectedRows.length === 0) {
                    store.dispatch(approveDisabled(true))
                    store.dispatch(rejectDisabled(true))
                    store.dispatch(deleteDisbaled(true))
                }
                if (selectedRows.length >= 1) {
                    let item_status = _.find(selectedRows, ["status", "Unchecked"])
                    item_status ? store.dispatch(approveDisabled(true)) : store.dispatch(approveDisabled(false))
                    item_status ? store.dispatch(rejectDisabled(true)) : store.dispatch(rejectDisabled(false))
                    item_status ? store.dispatch(deleteDisbaled(false)) : store.dispatch(deleteDisbaled(true))
                }
                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
        };

        return (
            <div>
                <Row>
                    <Col span={12}>
                        <span className="lamp-table-list-header">
                            Self-Registration Request List
                        </span>
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                        <Button type="primary" style={{ marginRight: "5px" }} disabled={this.state.approveFlag} onClick={this.showApproved}>
                            Approve
                        </Button>
                        <Button type="primary" style={{ marginRight: "5px" }} disabled={this.state.rejectFlag} onClick={this.showRejected}>
                            Rejecte
                        </Button>
                        <Button type="primary" style={{ marginRight: "5px" }} disabled={this.state.deleteFlag} onClick={this.showDelete}>
                            <Icon type="delete"></Icon>
                        </Button>
                        <Button type="primary" style={{ marginLeft: "5px" }} onClick={this.refresh}>
                            <Icon type="sync"></Icon>
                        </Button>

                    </Col>
                </Row>
                <br />
                <Row >
                    <Col span={20}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    </Col>
                    <Col span={4} style={{ textAlign: "right" }}>
                        <ButtonGroup>
                            <Button type="primary" onClick={this.getDataByCondition.bind(this, "All")}>
                                All
                            </Button>
                            <Button type="primary" onClick={this.getDataByCondition.bind(this, "Unchecked")}>
                                Unchecked
                            </Button>
                            <Button type="primary" onClick={this.getDataByCondition.bind(this, "Approved")}>
                                Approved
                            </Button>
                            <Button type="primary" onClick={this.getDataByCondition.bind(this, "Rejected")}>
                                Rejected
                            </Button>
                        </ButtonGroup>
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
                    title="Self-Registration Request Detail"
                    width={520}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <GuestOperatorDetail item={this.state.selectedItem} />

                    <div className="samp_detail_drawer_style">
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Return
                        </Button>
                    </div>
                </Drawer>
                <Modal
                    title="Delete Self-Registration Request"
                    visible={this.state.isShowModal}
                    onOk={this.deleteItem}
                    onCancel={this.cancelDelete}
                >
                    <p>Are you sure delete these {this.state.selectedSize} items ?</p>
                </Modal>

                <Modal
                    title="Approved item"
                    visible={this.state.isShowApproved}
                    onOk={this.approvedItem}
                    onCancel={this.cancelApproved}
                >
                    <p>Are you sure approved these {this.state.selectedSize} items ?</p>
                </Modal>
                <Modal
                    title="Rejected item"
                    visible={this.state.isShowRejected}
                    onOk={this.rejectedItem}
                    onCancel={this.cancelRejected}
                >
                    <p>Are you sure rejected these {this.state.selectedSize} items ?</p>
                </Modal>
            </div>
        );
    }
}

export default GuestOperator;