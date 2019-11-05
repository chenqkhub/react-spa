import React, { Component } from 'react';
import { Form, Row, Col, Input, Collapse, Tooltip } from 'antd';
import UserPanelHeader from '../../../components/custom-collapse/UserPanelHeader'
const { Panel } = Collapse
const { Search } = Input
class AccessPolicyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Role Name:</Col>
                        <Col span={12}>{this.props.item.roleName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Description:</Col>
                        <Col span={12}>{this.props.item.description}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>System-Defined:</Col>
                        <Col span={12}>{this.props.item.systemDefined}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Accessible Maps:</Col>
                        <Col span={12}>{this.props.item.accessibleAllMaps === true ? "All Maps (Can access all devices in the network)" : "No Maps (Cannot access any devices in the network)"}</Col>
                    </Row>
                    <br />
                    <Collapse defaultActiveKey={['1']} onChange={this.callback} expandIconPosition="right">
                        <Panel header="Access Control (Network Applications)" key="1" className="samp_collapse_panel_header">
                            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                            <br />
                            <br />
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Policy Engine" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white" >
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Asset Management" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="BYOD Management" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Certificate Management" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Device Management" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Guest Management" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="License Management" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Log Server" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Portal Management" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Timer Task" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Workflow" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="User Center" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>

                        </Panel>
                    </Collapse>
                    <Collapse defaultActiveKey={['1']} onChange={this.callback} expandIconPosition="right" >
                        <Panel header="Access Control (Non Network Applications)" key="1" className="samp_collapse_panel_header">
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="App. Launch" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Dashboard" competence="Read" />} key="1" className="samp_detail_collapse_header_white">

                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Reports" competence="Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Preferences (User Settings)" competence="Write,Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                    </Row>
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                            <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right" >
                                <Panel header={<UserPanelHeader title="Preferences (System Settings)" competence="Read" />} key="1" className="samp_detail_collapse_header_white">
                                    <Row className="lamp_user_role_line">
                                        <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                    </Row>
                                </Panel>
                            </Collapse>

                        </Panel>
                    </Collapse>
                </Form>
            </div>
        );
    }
}

export default AccessPolicyDetail;