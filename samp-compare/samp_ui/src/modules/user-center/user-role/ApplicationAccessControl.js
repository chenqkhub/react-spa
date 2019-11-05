import React, { Component } from 'react';
import { Input, Row, Col, Checkbox, Collapse } from 'antd';
const { Panel } = Collapse;
const { Search } = Input;
const defaultCheckedList = [];

class ApplicationAccessControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: defaultCheckedList,
            webAllRead: {
                checkWebAllRead: false,
                checkNoneAllRead: false,
                policy_engine_read: false,
                asset_management_read: false,
                byod_management_read: false,
                certificate_management_read: false,
                device_management_read: false,
                guest_management_read: false,
                license_management_read: false,
                log_management_read: false,
                portal_management_read: false,
                timer_task_read: false,
                setting_read: false,
                workflow_read: false,
                user_center_read: false,
            },
            webAllWrite: {
                checkWebAllWrite: false,
                checkNoneAllWrite: false,
                policy_engine_write: false,
                asset_management_write: false,
                byod_management_write: false,
                certificate_management_write: false,
                device_management_write: false,
                guest_management_write: false,
                license_management_write: false,
                log_management_write: false,
                portal_management_write: false,
                timer_task_write: false,
                setting_write: false,
                workflow_write: false,
                user_center_write: false,
            },
            noneAllRead: {
                dashboard_read: false,
                report_read: false,
                app_launch_read: false,
                system_setting_read: false,
                user_setting_read: false,
            },
            noneAllWrite: {
                dashboard_write: false,
                report_write: false,
                app_launch_write: false,
                system_setting_write: false,
                user_setting_write: false,
            }

        }
    }

    networkApplicationReadAll = e => {
        console.log(e.target.checked)
        this.setState({
            checkWebAllRead: e.target.checked
        })
        if (e.target.checked) {
            let webAllRead = this.state.webAllRead;
            for (let key in this.state.webAllRead) {
                webAllRead[key] = true;
            }
            this.setState({
                webAllRead: webAllRead
            })

        } else {
            let webAllRead = this.state.webAllRead;
            for (let key in this.state.webAllRead) {
                webAllRead[key] = false;
            }
            this.setState({
                webAllRead: webAllRead
            })
        }
        console.log(this.state.webAllRead)
    }
    //操作所有的write all，当选中时，所有的write和read均被选中(包括read all),别切，如果取消选中则只取消write列选中
    networkApplicationWriteAll = e => {
        this.setState({
            checkWebAllWrite: e.target.checked
        })
        if (e.target.checked) {

            let webAllRead = this.state.webAllRead;
            let webAllWrite = this.state.webAllWrite;
            for (let key in this.state.webAllRead) {
                webAllRead[key] = true;
            }
            for (let key in this.state.webAllWrite) {
                webAllWrite[key] = true;
            }
            this.setState({
                webAllRead: webAllRead,
                webAllWrite: webAllWrite,
                checkWebAllRead: true
            })
        } else {
            let webAllWrite = this.state.webAllWrite;
            for (let key in this.state.webAllWrite) {
                webAllWrite[key] = false;
            }
            this.setState({
                webAllWrite: webAllWrite
            })
        }
        console.log(this.state.webAllRead)
        console.log(this.state.webAllWrite)
    }
    //None Application
    noneApplicationReadAll = e => {
        console.log(e.target.checked)
        this.setState({
            checkNoneAllRead: e.target.checked
        })
        if (e.target.checked) {
            let noneAllRead = this.state.noneAllRead;
            for (let key in this.state.noneAllRead) {
                noneAllRead[key] = true;
            }
            this.setState({
                noneAllRead: noneAllRead
            })

        } else {
            let noneAllRead = this.state.noneAllRead;
            for (let key in this.state.noneAllRead) {
                noneAllRead[key] = false;
            }
            this.setState({
                noneAllRead: noneAllRead
            })
        }
    }
    noneApplicationWriteAll = e => {
        console.log(e.target.checked)
        this.setState({
            checkNoneAllWrite: e.target.checked
        })
        if (e.target.checked) {
            let noneAllRead = this.state.noneAllRead;
            let noneAllWrite = this.state.noneAllWrite;
            for (let key in this.state.noneAllRead) {
                noneAllRead[key] = true;
            }
            for (let key in this.state.noneAllWrite) {
                noneAllWrite[key] = true;
            }
            this.setState({
                noneAllRead: noneAllRead,
                noneAllWrite: noneAllWrite,
                checkNoneAllRead: true
            })
        } else {
            let noneAllWrite = this.state.noneAllWrite;
            for (let key in this.state.noneAllWrite) {
                noneAllWrite[key] = false;
            }
            this.setState({
                noneAllWrite: noneAllWrite
            })
        }
    }

    checkedFunction = (value) => {
        console.log(value)
        let webAllRead = this.state.webAllRead
        let webAllWrite = this.state.webAllWrite
        let noneAllRead = this.state.noneAllRead
        let noneAllWrite = this.state.noneAllWrite
        if (webAllRead[value] !== undefined) {
            webAllRead[value] = !webAllRead[value]
        }
        if (webAllWrite[value] !== undefined) {
            webAllWrite[value] = !webAllWrite[value]
            if (webAllWrite[value]) {
                switch (value) {
                    case "policy_engine_write":
                        webAllRead["policy_engine_read"] = true
                        break;
                    case "asset_management_write":
                        webAllRead["asset_management_read"] = true
                        break;
                    case "byod_management_write":
                        webAllRead["byod_management_read"] = true
                        break;
                    case "certificate_management_write":
                        webAllRead["certificate_management_read"] = true
                        break;
                    case "device_management_write":
                        webAllRead["device_management_read"] = true
                        break;
                    case "guest_management_write":
                        webAllRead["guest_management_read"] = true
                        break;
                    case "license_management_write":
                        webAllRead["license_management_read"] = true
                        break;
                    case "log_management_write":
                        webAllRead["log_management_read"] = true
                        break;
                    case "policy_engine_write":
                        webAllRead["policy_engine_read"] = true
                        break;
                    case "portal_management_write":
                        webAllRead["portal_management_read"] = true
                        break;
                    case "timer_task_write":
                        webAllRead["timer_task_read"] = true
                        break;
                    case "setting_write":
                        webAllRead["setting_read"] = true
                        break;
                    case "workflow_write":
                        webAllRead["workflow_read"] = true
                        break;
                    case "user_center_write":
                        webAllRead["user_center_read"] = true
                        break;
                }
            }
        }
        if (noneAllRead[value] !== undefined) {
            noneAllRead[value] = !noneAllRead[value]
        }
        if (noneAllWrite[value] !== undefined) {
            noneAllWrite[value] = !noneAllWrite[value]
            if (noneAllWrite[value]) {
                switch (value) {
                    case "app_launch_write":
                        noneAllRead["app_launch_read"] = true
                        break;
                    case "dashboard_write":
                        noneAllRead["dashboard_read"] = true
                        break;
                    case "app_launch_read":
                        noneAllRead["app_launch_read"] = true
                        break;
                    case "report_write":
                        noneAllRead["report_read"] = true
                        break;
                    case "user_setting_write":
                        noneAllRead["user_setting_read"] = true
                        break;
                    case "system_setting_write":
                        noneAllRead["system_setting_read"] = true
                        break;
                }
            }
        }
        this.setState({
            webAllRead: webAllRead,
            webAllWrite: webAllWrite,
            noneAllRead: noneAllRead,
            noneAllWrite: noneAllWrite
        })
        console.log(this.state)
    }
    render() {
        const children = []
        const genExtra = () => (
            <div onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}>
                <Checkbox
                    onChange={this.networkApplicationReadAll}
                    checked={this.state.checkWebAllRead}
                >
                    Read All
                </Checkbox>
                <Checkbox
                    onChange={this.networkApplicationWriteAll}
                    checked={this.state.checkWebAllWrite}
                >
                    Write All
                </Checkbox>
            </div >
        );
        const genNoneExtra = () => (
            <div onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}>
                <Checkbox
                    onChange={this.noneApplicationReadAll}
                    checked={this.state.checkNoneAllRead}
                >
                    Read All
                </Checkbox>
                <Checkbox
                    onChange={this.noneApplicationWriteAll}
                    checked={this.state.checkNoneAllWrite}
                >
                    Write All
                </Checkbox>
            </div>
        )
        return (
            <div style={{ width: "100%" }}>
                <div style={{ textAlign: "left", marginLeft: "5px", fontSize: "16px" }}>
                    Application Access Control
                </div>
                <div style={{ textAlign: "left", marginLeft: "10px" }}>
                    Control what applications can be accessed
                </div>


                <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                    <Panel header="Network Applications" key="1" extra={genExtra()} style={{ textAlign: "left", backgroundColor: "#5f5f5f", color: "white" }}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                        <br />
                        <br />
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Policy Engine</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.policy_engine_read} onChange={this.checkedFunction.bind(this, "policy_engine_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.policy_engine_write} onChange={this.checkedFunction.bind(this, "policy_engine_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Asset Management</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.asset_management_read} onChange={this.checkedFunction.bind(this, "asset_management_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.asset_management_write} onChange={this.checkedFunction.bind(this, "asset_management_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>BYOD Management</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.byod_management_read} onChange={this.checkedFunction.bind(this, "byod_management_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.byod_management_write} onChange={this.checkedFunction.bind(this, "byod_management_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Certificate Management</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.certificate_management_read} onChange={this.checkedFunction.bind(this, "certificate_management_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.certificate_management_write} onChange={this.checkedFunction.bind(this, "certificate_management_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Device Management</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.device_management_read} onChange={this.checkedFunction.bind(this, "device_management_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.device_management_write} onChange={this.checkedFunction.bind(this, "device_management_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Guest Management</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.guest_management_read} onChange={this.checkedFunction.bind(this, "guest_management_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.guest_management_write} onChange={this.checkedFunction.bind(this, "guest_management_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>License Management</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.license_management_read} onChange={this.checkedFunction.bind(this, "license_management_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.license_management_write} onChange={this.checkedFunction.bind(this, "license_management_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Log Management</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.log_management_read} onChange={this.checkedFunction.bind(this, "log_management_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.log_management_write} onChange={this.checkedFunction.bind(this, "log_management_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Portal Management</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.portal_management_read} onChange={this.checkedFunction.bind(this, "portal_management_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.portal_management_write} onChange={this.checkedFunction.bind(this, "portal_management_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Timer Task</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.timer_task_read} onChange={this.checkedFunction.bind(this, "timer_task_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.timer_task_write} onChange={this.checkedFunction.bind(this, "timer_task_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Setting</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.setting_read} onChange={this.checkedFunction.bind(this, "setting_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.setting_write} onChange={this.checkedFunction.bind(this, "setting_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Workflow</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.workflow_read} onChange={this.checkedFunction.bind(this, "workflow_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.workflow_write} onChange={this.checkedFunction.bind(this, "workflow_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>User Center</Col>
                            <Col span={1}><Checkbox checked={this.state.webAllRead.user_center_read} onChange={this.checkedFunction.bind(this, "user_center_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.webAllWrite.user_center_write} onChange={this.checkedFunction.bind(this, "user_center_write")}>Write</Checkbox></Col>
                        </Row>
                    </Panel>
                </Collapse>
                <br />
                <Collapse defaultActiveKey={['2']} onChange={this.callback}>
                    <Panel header="None Network Applications" key="2" extra={genNoneExtra()} style={{ textAlign: "left", backgroundColor: "#5f5f5f", color: "white" }}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                        <br />
                        <br />
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>App. Launch</Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllRead.app_launch_read} onChange={this.checkedFunction.bind(this, "app_launch_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllWrite.app_launch_write} onChange={this.checkedFunction.bind(this, "app_launch_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Dashboard</Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllRead.dashboard_read} onChange={this.checkedFunction.bind(this, "dashboard_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllWrite.dashboard_write} onChange={this.checkedFunction.bind(this, "dashboard_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Reports</Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllRead.report_read} onChange={this.checkedFunction.bind(this, "report_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllWrite.report_write} onChange={this.checkedFunction.bind(this, "report_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Preferences (User Settings)</Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllRead.user_setting_read} onChange={this.checkedFunction.bind(this, "user_setting_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllWrite.user_setting_write} onChange={this.checkedFunction.bind(this, "user_setting_write")}>Write</Checkbox></Col>
                        </Row>
                        <Row className="lamp_user_role_line">
                            <Col span={22} style={{ textAlign: "left" }}>Preferences (System Settings)</Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllRead.system_setting_read} onChange={this.checkedFunction.bind(this, "system_setting_read")}>Read</Checkbox></Col>
                            <Col span={1}><Checkbox checked={this.state.noneAllWrite.system_setting_write} onChange={this.checkedFunction.bind(this, "system_setting_write")}>Write</Checkbox></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}
export default ApplicationAccessControl;