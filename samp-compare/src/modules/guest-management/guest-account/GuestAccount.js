import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon, Input, Row, Col, Table, Drawer, Modal, Tabs, Upload } from 'antd'
import axios from 'axios'
import _ from "lodash"
import history from '../../../history/History'
import store from '././../../../stores/store'
import { deleteDisbaled, editDisbaled, listData, createColumn, deleteShow, detailShow, selectedSize, selectedItem, disabledBeatch, disabledShow, enabledShow, isDisabled, isEnabled, disabledExtend, extendShow, accountType, importModal, pageSize, currentPage } from '../../../actions/guest-account/actionCreator'
import columns from './GuestAccountTableConfig'
import GuestAccountNameDetail from './GuestAccountNameDetail'
import GuestAccessCodeDetail from './GuestAccessCodeDetail'
import ExtendAccount from './ExtendAccount';
const { TabPane } = Tabs;
const { Search } = Input;
const ButtonGroup = Button.Group;
const accountNameList =
    [
        {
            "id": 1, "accountName": "111111", "accountType": "Account Name", "accountValidityPeriod": "1574131721000", "company": "HAN",
            "companyTelPhone": "", "countryOrRegion": "", "creator": "Admin-admin", "dataQuota": "Disabled", "dataQuotaAmount": 1000, "dateOfEffective": "1564971676989",
            "department": "", "description": "", "email": "", "expireTime": "1574131721000", "fullName": "",
            "selfRegisterCustomAttrList": "default group", "serviceLevel": 0, "status": 1, "telephone": "", "username": "chenqk"
        },
        {
            "id": 2, "accountName": "111111", "accountType": "Account Name", "accountValidityPeriod": "1574131721000", "company": "HAN",
            "companyTelPhone": "", "countryOrRegion": "", "creator": "Admin-admin", "dataQuota": "Disabled", "dataQuotaAmount": 1000, "dateOfEffective": "1564971676989",
            "department": "", "description": "", "email": "", "expireTime": "1574131721000", "fullName": "",
            "selfRegisterCustomAttrList": "default group", "serviceLevel": 0, "status": 0, "telephone": "", "username": "chenqk"
        },
    ]
const accessCodeList =
    [
        {
            "id": 1, "accountName": "111111", "accountType": "Access Code", "accountValidityPeriod": "1574131721000", "creator": "Admin-admin", "dateOfEffective": "1564971676989",
            "department": "", "description": "", "expireTime": "1574131721000",
            "selfRegisterCustomAttrList": "default group", "serviceLevel": 0, "status": 1, "username": "chenqk"
        },
        {
            "id": 1, "accountName": "111111", "accountType": "Access Code", "accountValidityPeriod": "1574131721000", "creator": "Admin-admin", "dateOfEffective": "1564971676989",
            "department": "", "description": "", "expireTime": "1574131721000",
            "selfRegisterCustomAttrList": "default group", "serviceLevel": 0, "status": 0, "username": "chenqk"
        },
    ]
class GuestAccount extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState().guestAccountReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
        console.log(this.state)
    }
    storeChange = () => {
        this.setState(store.getState().guestAccountReducer)
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
        store.dispatch(listData(accountNameList))
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

    //显示导入
    showImport = () => {
        store.dispatch(importModal(true))
    }
    cancelImport = () => {
        store.dispatch(importModal(false))
    }
    //显示extend
    showExtend = () => {
        store.dispatch(extendShow(true))
    }
    handleExtend = () => {
        store.dispatch(extendShow(false))
    }
    cancelExtend = () => {
        store.dispatch(extendShow(false))
    }
    //disabled
    showDisabled = () => {
        store.dispatch(disabledShow(true))
    }
    disabledItem = () => {
        store.dispatch(disabledShow(false))
    }
    cancelDisabled = () => {
        store.dispatch(disabledShow(false))
    }
    //enabled
    showEnabled = () => {
        store.dispatch(enabledShow(true))
    }
    enabledItem = () => {
        store.dispatch(enabledShow(false))
    }
    cancelEnabled = () => {
        store.dispatch(enabledShow(false))
    }

    //选择数据按钮是否可用
    setDisabledFlag = (selectedRows) => {
        let item_enabled = _.find(selectedRows, ["status", 1])
        let item_disabled = _.find(selectedRows, ["status", 0])
        if (selectedRows.length === 0) {
            store.dispatch(deleteDisbaled(true))
            store.dispatch(editDisbaled(true))
            store.dispatch(disabledExtend(true))
            store.dispatch(isDisabled(true))
            store.dispatch(isEnabled(true))
        } else if (selectedRows.length === 1) {
            store.dispatch(deleteDisbaled(false))
            store.dispatch(editDisbaled(false))
            store.dispatch(disabledExtend(false))
            item_enabled ? store.dispatch(isEnabled(true)) : store.dispatch(isEnabled(false))
            item_disabled ? store.dispatch(isDisabled(true)) : store.dispatch(isDisabled(false))
        } else if (selectedRows.length > 1) {
            store.dispatch(deleteDisbaled(false))
            store.dispatch(editDisbaled(true))
            store.dispatch(disabledExtend(false))
            store.dispatch(isEnabled(true))
            store.dispatch(isDisabled(true))
        }
    }
    //改变tabs，调用的方法
    changeTheTabs = (key) => {
        store.dispatch(selectedItem([]))
        store.dispatch(selectedSize(0))
        store.dispatch(disabledExtend(true))
        //请求数据
        console.log(key);
        if (key === "1") {
            store.dispatch(listData(accountNameList))
            store.dispatch(accountType("ACCOUNT_NAME"))
        } else if (key === "2") {
            store.dispatch(listData(accessCodeList))
            store.dispatch(accountType("ACCESS_CODE"))
        }
    }

    //处理上传操作
    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file);
        });

        this.setState({
            uploading: true,
        });

        // You can use any AJAX library you like
        // axios({
        //   url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        //   method: 'post',
        //   processData: false,
        //   data: formData,
        //   success: () => {
        //     this.setState({
        //       fileList: [],
        //       uploading: false,
        //     });
        //     message.success('upload successfully.');
        //   },
        //   error: () => {
        //     this.setState({
        //       uploading: false,
        //     });
        //     message.error('upload failed.');
        //   },
        // });
        store.dispatch(importModal(false))
    };
    //extend callback
    extendAccount = (item) => {
        console.log("item", item)
        if (item.dataQuotaAmount && item.accountValidityPeriod) {

        }
    }
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            //record代表当前选中的对象，selected代表true/false，selectedRows数组表示当前选中的所有数据
            onSelect: (record, selected, selectedRows) => {
                this.setDisabledFlag(selectedRows)
                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                this.setDisabledFlag(selectedRows)
                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
        };
        const { uploading, fileList } = this.state;
        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
                return false;
            },
            fileList,
        };
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <span className="lamp-table-list-header">
                            Guest Account List
                        </span>
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                        <Button type="primary" style={{ marginRight: "5px" }} disabled={this.state.beatchDisabeld}>
                            <Link to={{ pathname: "/guest-management/guest-account/batch-creation", accountType: this.state.accountType }}>
                                Batch Creation
                            </Link>
                        </Button>
                        <Button type="primary" style={{ marginRight: "5px" }} onClick={this.showDisabled} disabled={this.state.isDisabled}>Disabled</Button>
                        <Button type="primary" style={{ marginRight: "5px" }} onClick={this.showEnabled} disabled={this.state.isEnabled}>Enabled</Button>
                        <Button type="primary" style={{ marginRight: "5px" }}>Print Tickets</Button>
                        <Button type="primary" style={{ marginRight: "5px" }} onClick={this.showImport}>Import</Button>
                        <Button type="primary" style={{ marginRight: "5px" }} onClick={this.showExtend} disabled={this.state.extendDisabled}>Extend</Button>
                        <ButtonGroup>
                            <Button type="primary">
                                <Link to={{ pathname: "/guest-management/guest-account/mode", state: this.state.selectedItem, accountType: this.state.accountType, mode: "create" }}>
                                    <Icon type="plus"></Icon>
                                </Link>

                            </Button>
                            <Button type="primary" disabled={this.state.editFlag}>
                                <Link to={{ pathname: "/guest-management/guest-account/mode", state: this.state.selectedItem, accountType: this.state.accountType, mode: "edit" }}>
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
                <Tabs defaultActiveKey="1" onChange={this.changeTheTabs}>
                    <TabPane tab="Account Name" key="1">
                        <Table bordered rowKey={record => record.uid}
                            dataSource={this.state.list}
                            columns={this.state.columns.accountNameAttr}
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
                    <TabPane tab="Access Code" key="2">
                        <Table bordered rowKey={record => record.uid}
                            dataSource={this.state.list}
                            columns={this.state.columns.accessCodeAttr}
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
                    title="Guest Account Detail"
                    width={600}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    {
                        this.state.accountType == "ACCOUNT_NAME" ? <GuestAccountNameDetail item={this.state.selectedItem} /> : <GuestAccessCodeDetail item={this.state.selectedItem} />
                    }


                    <div className="samp_detail_drawer_style">
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Return
                        </Button>
                    </div>
                </Drawer>
                <Modal
                    title="Delete Online Device"
                    visible={this.state.isShowModal}
                    onOk={this.kickoffItem}
                    onCancel={this.cancelKickoff}
                >
                    <p>Are you sure delete these {this.state.selectedSize} items ?</p>
                </Modal>
                <Modal
                    title="Enabled Guest Account"
                    visible={this.state.isShowEnabled}
                    onOk={this.enabledItem}
                    onCancel={this.cancelEnabled}
                >
                    <p>Are you sure enabled these {this.state.selectedSize} items ?</p>
                </Modal>
                <Modal
                    title="Disabled Guest Account"
                    visible={this.state.isShowDisabled}
                    onOk={this.disabledItem}
                    onCancel={this.cancelDisabled}
                >
                    <p>Are you sure disabled these {this.state.selectedSize} items ?</p>
                </Modal>
                <Modal
                    title="Import File"
                    visible={this.state.isShowImport}
                    onOk={this.handleUpload}
                    onCancel={this.cancelImport}
                    okText="Import"
                >
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <Button type="primary"><Icon type="download"></Icon>Template</Button>
                        <Input style={{ width: "50%" }} />
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" /> Select File
                            </Button>
                        </Upload>
                    </div>
                    <br />
                    <div style={{ width: "100%", }}>
                        <ul style={{ marginLeft: "20%" }}>
                            <li>Note:</li>
                            <li>-Only support xls/csv/xlsx file.</li>
                            <li>-No more than 50,000 data per file.</li>
                        </ul>
                    </div>

                </Modal>
                <Modal
                    title="Extend Account"
                    visible={this.state.isShowExtend}
                    onOk={this.handleExtend}
                    onCancel={this.cancelExtend}
                    width={800}
                    destroyOnClose
                    okText="Save"
                >
                    <ExtendAccount accountType={this.state.accountType} extendAccount={this.extendAccount} />
                </Modal>
            </div>
        );
    }
}

export default GuestAccount;