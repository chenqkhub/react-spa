/***
 * 该模块包含一下功能
 * 1、预设模板(支持自定义模板)
 * 2、基于预设模板修改后，用户上传的模板(该模板支持自定义功能)
 * 3、用户模板，该模板不支持自定义功能
 * 4、广告位运营管理
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon, Input, Row, Col, Table, Drawer, Modal, Upload } from 'antd'
import _ from 'lodash'
import store from '././../../stores/store'
import { deleteDisbaled, editDisbaled, listData, createColumn, deleteShow, detailShow, selectedSize, selectedItem, showImport, customDisabled, pageSize, currentPage } from '../../actions/captive-portal/actionCreator'
import PortalPageDetail from './PortalPageDetail'
import columns from './PortalPageTableConfig'
const ButtonGroup = Button.Group;
const { Search } = Input;

class PortalPage extends Component {
    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState().captivePortalReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState().captivePortalReducer)
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
                "id": 1, "key": "1", "portalName": "1.0.0.1", "templateName": "portalLayout1",
                "description": "Template One",
            },
            {
                "id": 2, "key": "2", "portalName": "2.0.0.1", "templateName": "portalLayout2",
                "description": "Template Two",
            },
            {
                "id": 3, "key": "3", "portalName": "3.0.0.1", "templateName": "portalLayout3",
                "description": "Template Three",
            },
            {
                "id": 4, "key": "4", "portalName": "4.0.0.1", "templateName": "portalLayout4",
                "description": "Template Four",
            },
            {
                "id": 5, "key": "5", "portalName": "5.0.0.1", "templateName": "portalLayout5",
                "description": "Template Five",
            },
            {
                "id": 6, "key": "6", "portalName": "6.0.0.1", "templateName": "portalLayout6",
                "description": "Template Six",
            }
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
        console.log("详情")
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
    //显示导入模态框
    showImport = () => {
        store.dispatch(showImport(true))
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
        store.dispatch(showImport(false))
    };
    //隐藏导入框
    cancelImport = () => {
        store.dispatch(showImport(false))
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
                selectedRows.length === 1 ?
                    store.dispatch(customDisabled(false)) : store.dispatch(customDisabled(true))
                selectedRows.length >= 1 ?
                    store.dispatch(deleteDisbaled(false)) : store.dispatch(deleteDisbaled(true))

                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                selectedRows.length >= 1 ? store.dispatch(deleteDisbaled(false)) : store.dispatch(deleteDisbaled(true))
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
                    <Col span={14}>
                        <span className="lamp-table-list-header">
                            Captive Portal Page Client List
                        </span>
                    </Col>
                    <Col span={10} style={{ textAlign: "right" }}>
                        <Button style={{ marginRight: "10px" }} onClick={this.showImport} type="primary">
                            Import
                        </Button>
                        <Button style={{ marginRight: "10px" }} type="primary" disabled={this.state.customFlag}>
                            <Link to={{ pathname: '/portal-management/portal-page/custom', state: this.state.selectedItem }}>
                                Customization
                            </Link>
                        </Button>
                        <ButtonGroup>
                            <Button type="primary">
                                <Link to={{ pathname: '/portal-management/portal-page/mode', state: this.state.selectedItem, mode: "create" }}>
                                    <Icon type="plus"></Icon>
                                </Link>

                            </Button>
                            <Button type="primary" disabled={this.state.editFlag}>
                                <Link to={{ pathname: '/portal-management/portal-page/mode', state: this.state.selectedItem, mode: "edit" }}>
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
                    onRow={(record, rowkey) => {
                        return {
                            onClick: this.showRow.bind(this, record, rowkey)
                        }
                    }} />;
                <Drawer
                    title="Portal Page Detail"
                    width={600}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <PortalPageDetail item={this.state.selectedItem} />

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
            </div>

        );
    }
}

export default PortalPage;