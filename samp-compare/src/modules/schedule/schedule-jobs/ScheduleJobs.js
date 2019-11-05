import React, { Component } from 'react';
import { Button, Icon, Input, Row, Col, Table, Drawer, Modal } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios'
import store from '../../../stores/store'
import { deleteDisbaled, editDisbaled, listData, createColumn, deleteShow, detailShow, selectedSize, selectedItem, pageSize, currentPage, stopDisabled, pauseDisabled, startDisabled, showPause, showStart, showStop } from '../../../actions/schedule-jobs/actionCreator'
import ScheduleJobsDetail from './ScheduleJobsDetail'
import columns from './ScheduleJobsTableConfig'
const ButtonGroup = Button.Group;
const { Search } = Input;

class NasClients extends Component {
    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState().scheduleJobsReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
        console.log("this.state", this.state)
    }
    storeChange = () => {
        this.setState(store.getState().scheduleJobsReducer)
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
                "id": 1, "key": "1", "actor": "ApGroupFrequentUpdating", "cronExpression": null, "endTime": null, "internal": false,
                "jobData": { "useInstanceId": true },
                "jobDescription": "Polling information from UPAM service.",
                "jobGroup": "Poller", "jobId": "AGProfilePollingJob", "jobState": "SCHEDULED", "messageObjects": {}, "modified": true,
                "owner": null, "policies": ["IGNORE_WHEN_OVERLAP", "RESUME_FROM_CRASH"], "priority": 5, "progressPercentage": 0,
                "progressState": {
                    "actor": "ApGroupFrequentUpdating", "completedWorkerRequests": [], "configurationsDataMap": {}, "droppedUnits": [], "failedUnits": [], "isInlineJob": false,
                    "percentage": 0, "previouslySucceededUnits": [], "sourceUnits": [], "status": "FINISHED", "succeededUnits": [], "success": false, "uniqueId": "AGProfilePollingJob"
                },
                "queue": "OVPollerRequestServiceQueue", "repeatCount": -1, "repeatInterval": 3600, "retryCount": 5, "retryInterval": 10, "startTime": 1569597514398, "system": true, "timeOut": 86400, "timeZone": null, "type": "feature"
            },
            {
                "id": 2, "key": "2", "actor": "InventoryPoller", "cronExpression": null, "endTime": null, "internal": false,
                "jobData": { "families": ["OS6250", "OS6350", "OS6450", "OS6560", "OS6560", "OS6465", "OS6850", "OS6855", "OS6865", "OS6860", "OS6900", "OAW-4", "OS9700", "OS9800", "IAP", "OS10K", "OAW-4", "OAW-AP", "OS2220"], "useInstanceId": true },
                "jobDescription": "Polling Inventory data from devices belong to these families OS6250, OS6350, OS6400, OS6465, OS6450, OS6560, OS6850/OS6850E, OS6855, OS9000, OS6860/OS6860E, OS6865, OS6900, OS9700/OS9700E, OS9800/OS9800E, OS9900, OS10K, OAW-4xxx, IAP, OAW-AP1221, OAW-AP1222, OAW-AP1231, OAW-AP1232, OAW-AP1251, OAW-AP1101, OAW-AP1251D,OS2220",
                "jobGroup": "Poller", "jobId": "AGProfilePollingJob", "jobState": "SCHEDULED", "messageObjects": {}, "modified": true,
                "owner": null, "policies": ["IGNORE_WHEN_OVERLAP", "RESUME_FROM_CRASH"], "priority": 5, "progressPercentage": 0,
                "progressState": {
                    "actor": "InventoryPoller", "completedWorkerRequests": [], "configurationsDataMap": {}, "droppedUnits": [], "failedUnits": [], "isInlineJob": false,
                    "percentage": 0, "previouslySucceededUnits": [], "sourceUnits": [], "status": "FINISHED", "succeededUnits": [], "success": false, "uniqueId": "AGProfilePollingJob"
                },
                "queue": "OVPollerRequestServiceQueue", "repeatCount": -1, "repeatInterval": 3600, "retryCount": 5, "retryInterval": 10, "startTime": 1569597514398, "system": true, "timeOut": 86400, "timeZone": null, "type": "feature"
            },
            {
                "id": 3, "key": "3", "actor": "AGProfilePoller", "cronExpression": null, "endTime": null, "internal": false,
                "jobData": { "families": ["OS6250", "OS6350", "OS6450", "OS6560", "OS6560", "OS6465", "OS6850", "OS6855", "OS6865", "OS6860", "OS6900", "OAW-4", "OS9700", "OS9800", "IAP", "OS10K"], "useInstanceId": true },
                "jobDescription": "Polling AG profiles from devices belong to these families OS6250, OS6350, OS6450, OS6560, OS6465, OS6850/OS6850E, OS6855, OS6865, OS6860/OS6860E, OS6900,  OAW-4xxx, OS9700/OS9700E, OS9800/OS9800E, IAP, OS10K",
                "jobGroup": "Poller", "jobId": "AGProfilePollingJob", "jobState": "SCHEDULED", "messageObjects": {}, "modified": true,
                "owner": null, "policies": ["IGNORE_WHEN_OVERLAP", "RESUME_FROM_CRASH"], "priority": 5, "progressPercentage": 0,
                "progressState": {
                    "actor": "AGProfilePoller", "completedWorkerRequests": [], "configurationsDataMap": {}, "droppedUnits": [], "failedUnits": [], "isInlineJob": false,
                    "percentage": 0, "previouslySucceededUnits": [], "sourceUnits": [], "status": "FINISHED", "succeededUnits": [], "success": false, "uniqueId": "AGProfilePollingJob"
                },
                "queue": "OVPollerRequestServiceQueue", "repeatCount": -1, "repeatInterval": 3600, "retryCount": 5, "retryInterval": 10, "startTime": 1569597514398, "system": true, "timeOut": 86400, "timeZone": null, "type": "feature"
            },
            {
                "id": 4, "key": "4", "actor": "AnalyticDNSScheduler", "cronExpression": "0 0 0 1 * ? *", "endTime": null, "internal": false,
                "jobData": { "families": ["OS6250", "OS6350", "OS6450", "OS6560", "OS6560", "OS6465", "OS6850", "OS6855", "OS6865", "OS6860", "OS6900", "OAW-4", "OS9700", "OS9800", "IAP", "OS10K"], "useInstanceId": true },
                "jobDescription": "Updating/cleaning DNSResolution data periodically for devices OS6250, OS6350, OS6400, OS6450, OS6560, OS6465, OS6850/OS6850E, OS6855, OS9700/OS9700E, OS9800/OS9800E, OS9900, OS10K, OS6900, OS6860/OS6860E",
                "jobGroup": "Poller", "jobId": "AGProfilePollingJob", "jobState": "SCHEDULED", "messageObjects": {}, "modified": true,
                "owner": null, "policies": ["IGNORE_WHEN_OVERLAP", "RESUME_FROM_CRASH"], "priority": 5, "progressPercentage": 0,
                "progressState": {
                    "actor": "AnalyticDNSScheduler", "completedWorkerRequests": [], "configurationsDataMap": {}, "droppedUnits": [], "failedUnits": [], "isInlineJob": false,
                    "percentage": 0, "previouslySucceededUnits": [], "sourceUnits": [], "status": "FINISHED", "succeededUnits": [], "success": false, "uniqueId": "AGProfilePollingJob"
                },
                "queue": "OVPollerRequestServiceQueue", "repeatCount": -1, "repeatInterval": 3600, "retryCount": 5, "retryInterval": 10, "startTime": 1569597514398, "system": true, "timeOut": 86400, "timeZone": null, "type": "feature"
            },
            {
                "id": 5, "key": "5", "actor": "AnalyticPurgeScheduler", "cronExpression": "0 0/5 * * * ? *", "endTime": null, "internal": false,
                "jobData": { "families": ["OAW-4"], "useInstanceId": true },
                "jobDescription": "Cleaning OAW-4xxx standby switches based on VRRP infomation",
                "jobGroup": "Poller", "jobId": "AGProfilePollingJob", "jobState": "SCHEDULED", "messageObjects": {}, "modified": true,
                "owner": null, "policies": ["IGNORE_WHEN_OVERLAP", "RESUME_FROM_CRASH"], "priority": 5, "progressPercentage": 0,
                "progressState": {
                    "actor": "AnalyticPurgeScheduler", "completedWorkerRequests": [], "configurationsDataMap": {}, "droppedUnits": [], "failedUnits": [], "isInlineJob": false,
                    "percentage": 0, "previouslySucceededUnits": [], "sourceUnits": [], "status": "FINISHED", "succeededUnits": [], "success": false, "uniqueId": "AGProfilePollingJob"
                },
                "queue": "OVPollerRequestServiceQueue", "repeatCount": -1, "repeatInterval": 3600, "retryCount": 5, "retryInterval": 10, "startTime": 1569597514398, "system": true, "timeOut": 86400, "timeZone": null, "type": "feature"
            },
            {
                "id": 6, "key": "6", "actor": "AutoSchedulerLocatorJob", "cronExpression": null, "endTime": null, "internal": false,
                "jobData": {},
                "jobDescription": "Polling Locator data for devices OAW-AP1221, OAW-AP1222, OAW-AP1231, OAW-AP1232, OAW-AP1251, OAW-AP1101, OAW-AP1251D",
                "jobGroup": "Poller", "jobId": "AGProfilePollingJob", "jobState": "SCHEDULED", "messageObjects": {}, "modified": true,
                "owner": null, "policies": ["IGNORE_WHEN_OVERLAP", "RESUME_FROM_CRASH"], "priority": 5, "progressPercentage": 0,
                "progressState": {
                    "actor": "AutoSchedulerLocatorJob", "completedWorkerRequests": [], "configurationsDataMap": {}, "droppedUnits": [], "failedUnits": [], "isInlineJob": false,
                    "percentage": 0, "previouslySucceededUnits": [], "sourceUnits": [], "status": "FINISHED", "succeededUnits": [], "success": false, "uniqueId": "AGProfilePollingJob"
                },
                "queue": "OVPollerRequestServiceQueue", "repeatCount": -1, "repeatInterval": 3600, "retryCount": 5, "retryInterval": 10, "startTime": 1569597514398, "system": true, "timeOut": 86400, "timeZone": null, "type": "feature"
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
    //stop
    //pause
    //start
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
                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
        };
        return (
            <div>
                <Row>
                    <Col span={14}>
                        <span className="lamp-table-list-header">
                            Schedule Jobs List
                        </span>
                    </Col>
                    <Col span={10} style={{ textAlign: "right" }}>
                        <Button type="primary" disabled={this.state.stopFlag}>
                            <Icon type="stop"></Icon>
                        </Button>
                        <Button type="primary" disabled={this.state.pauseFlag} style={{ marginLeft: "5px" }}>
                            <Icon type="pause-circle"></Icon>
                        </Button>
                        <Button type="primary" disabled={this.state.startFlag} style={{ marginLeft: "5px" }}>
                            <Icon type="play-circle"></Icon>
                        </Button>
                        <ButtonGroup style={{ marginLeft: "10px" }}>
                            <Button type="primary" disabled={true}>
                                <Link to={{ pathname: '/policy-engine/nas-client/mode', state: this.state.selectedItem, mode: "edit" }}>
                                    <Icon type="edit"></Icon>
                                </Link>
                            </Button>
                            <Button type="primary" disabled={this.state.deleteFlag} onClick={this.showModal}>
                                <Icon type="delete"></Icon>
                            </Button>
                        </ButtonGroup>
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
                    title="NAS Client Detail"
                    width={600}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <ScheduleJobsDetail item={this.state.selectedItem} />

                    <div className="samp_detail_drawer_style">
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Return
                        </Button>
                    </div>
                </Drawer>
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

export default NasClients;