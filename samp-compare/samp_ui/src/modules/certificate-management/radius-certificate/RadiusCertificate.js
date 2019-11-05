import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Icon, Input, Row, Col, Table, Drawer, Modal } from 'antd'
import _ from 'lodash'
import store from '././../../../stores/store'
import { deleteDisbaled, listData, createColumn, deleteShow, detailShow, selectedSize, selectedItem, download, activate, pageSize, currentPage } from '../../../actions/radius-certificate/actionCreator'
import RadiusCertificateDetail from './RadiusCertificateDetail'
import columns from './RadiusCertificateTableConfig'
const ButtonGroup = Button.Group;
const { Search } = Input;
class RadiusCertificate extends Component {
    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState().radiusCertificateReducer
        //订阅redux的状态
        store.subscribe(this.storeChange)
    }
    storeChange = () => {
        this.setState(store.getState().radiusCertificateReducer)
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
                "id": 1, "key": "1", "caFileName": "default_ca.pem", "from": "OmniVista-CA",
                "isExpiryStatus": "unexpired", "keyFileName": "default_server.key", "keyPasswd": null, "name": "default_server",
                "serverFileName": "default_server.pem", "to": "OmniVista", "type": "Server Certificate",
                "usingStatus": 1, "validityStartTime": 1571280602225, "validityStopTime": 1571280602225
            },
            {
                "id": 1, "key": "2", "caFileName": "default_ca.pem", "from": "OmniVista-CA",
                "isExpiryStatus": "unexpired", "keyFileName": "default_server.key", "keyPasswd": null, "name": "default_server",
                "serverFileName": "default_server.pem", "to": "OmniVista", "type": "Server Certificate",
                "usingStatus": 0, "validityStartTime": 1571280602225, "validityStopTime": 1571280602225
            },
            {
                "id": 1, "key": "3", "caFileName": "default_ca.pem", "from": "OmniVista-CA",
                "isExpiryStatus": "unexpired", "keyFileName": "default_server.key", "keyPasswd": null, "name": "cheqnk",
                "serverFileName": "default_server.pem", "to": "OmniVista", "type": "Server Certificate",
                "usingStatus": 0, "validityStartTime": 1571280602225, "validityStopTime": 1571280602225
            }
        ]
        store.dispatch(listData(list))
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
    //activate
    activateItem = () => {

    }

    //download
    downloadFile = () => {

    }

    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            //record代表当前选中的对象，selected代表true/false，selectedRows数组表示当前选中的所有数据
            onSelect: (record, selected, selectedRows) => {
                let item_using = _.find(selectedRows, ["usingStatus", 1])
                let item_name = _.find(selectedRows, ["name", "default_server"])
                console.log(record, selected, selectedRows)
                if (selectedRows.length === 0) {
                    store.dispatch(download(true))
                    store.dispatch(activate(true))
                    store.dispatch(deleteDisbaled(true))
                } else if (selectedRows.length === 1) {
                    store.dispatch(download(false))
                    item_using ? store.dispatch(activate(true)) : store.dispatch(activate(false))
                    item_name ? store.dispatch(deleteDisbaled(true)) : store.dispatch(deleteDisbaled(false))
                } else if (selectedRows.length > 1) {
                    store.dispatch(download(true))
                    store.dispatch(activate(true))
                    item_name || item_using ? store.dispatch(deleteDisbaled(true)) : store.dispatch(deleteDisbaled(false))
                }

                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                if (selectedRows.length !== 1) {
                    store.dispatch(download(true))
                    store.dispatch(activate(true))
                }
                if (selectedRows.length >= 1) {
                    let item = _.find(selectedRows, ["usingStatus", 1]) || _.find(selectedRows, ["name", "default_server"])
                    item ? store.dispatch(deleteDisbaled(true)) : store.dispatch(deleteDisbaled(false))
                }
                store.dispatch(selectedSize(selectedRows.length))
                store.dispatch(selectedItem(selectedRows))
            },
        };

        return (
            <div>
                <Row>
                    <Col span={14}>
                        <span className="lamp-table-list-header">
                            Radius Server Certificates List
                        </span>
                    </Col>
                    <Col span={10} style={{ textAlign: "right" }}>
                        <Button type="primary" onClick={this.downloadFile} style={{ marginRight: "10px" }} disabled={this.state.downloadFlag}>
                            Download
                        </Button>
                        <Button type="primary" onClick={this.activateItem} style={{ marginRight: "10px" }} disabled={this.state.activateFlag}>
                            Activate
                        </Button>
                        <ButtonGroup>
                            <Button type="primary">
                                <Link to="/certificate-management/free-radius-certificate/add">
                                    <Icon type="plus"></Icon>
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
                    title="Radius Server Certificates Detail"
                    width={600}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <RadiusCertificateDetail item={this.state.selectedItem} />

                    <div className="samp_detail_drawer_style">
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                            Return
                        </Button>
                    </div>
                </Drawer>
                <Modal
                    title="Delete Radius Server Certificates"
                    visible={this.state.isShowModal}
                    onOk={this.deleteItem}
                    onCancel={this.cancelDelete}
                >
                    <p>Are you sure delete  {this.state.selectedSize} items ?</p>
                </Modal>
                <Modal
                    title="Activate Item"
                    visible={this.state.isShowActivate}
                    onOk={this.activateItem}
                    onCancel={this.cancelActivate}
                >
                    <p>Are you sure activate  {this.state.selectedSize} items ?</p>

                </Modal>
            </div>
        );
    }
}

export default RadiusCertificate;