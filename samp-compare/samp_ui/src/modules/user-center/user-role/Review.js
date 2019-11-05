import React, { Component } from 'react';
import { Input, Row, Col, Checkbox, Collapse } from 'antd';
import UserPanelHeader from '../../../components/custom-collapse/UserPanelHeader'
const { Panel } = Collapse;
const { Search } = Input;
const defaultCheckedList = [];

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div style={{ width: "100%" }}>
                <div style={{ textAlign: "left", marginLeft: "5px", fontSize: "16px" }}>
                    Review
                </div>
                <div style={{ textAlign: "left", marginLeft: "10px" }}>
                    Review
                </div>
                <br />
                <hr />
                <Row>
                    <Col span={10} style={{ textAlign: "right" }}>
                        Role Name:
                    </Col>
                    <Col span={14} style={{ textAlign: "left" }}>
                        <span style={{ marginLeft: "10px" }}>chenqk</span>
                    </Col>
                </Row>
                <Row>
                    <Col span={10} style={{ textAlign: "right" }}>Description:</Col>
                    <Col span={14} style={{ textAlign: "left" }}>
                        <span style={{ marginLeft: "10px" }}>All Application can be accessed</span>
                    </Col>
                </Row>
                <Row>
                    <Col span={10} style={{ textAlign: "right" }}>Accessible Maps:</Col>
                    <Col span={14} style={{ textAlign: "left" }}>
                        <span style={{ marginLeft: "10px" }}>All Maps (Can access all devices in the network)</span>
                    </Col>
                </Row>
                <br />
                <Collapse defaultActiveKey={['1']} onChange={this.callback} expandIconPosition="right">
                    <Panel header="Access Control (Network Applications)" key="1" style={{ textAlign: "left", backgroundColor: "#5f5f5f", color: "white" }}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                        <br />
                        <br />
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Policy Engine" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }} >
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Asset Management" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="BYOD Management" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Certificate Management" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Device Management" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Guest Management" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="License Management" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Log Server" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Portal Management" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Timer Task" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Workflow" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="User Center" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
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
                <br />
                <Collapse defaultActiveKey={['1']} onChange={this.callback} expandIconPosition="right">
                    <Panel header="Access Control (Non Network Applications)" key="1" style={{ textAlign: "left", backgroundColor: "#5f5f5f", color: "white" }}>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="App. Launch" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Dashboard" competence="Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>

                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Reports" competence="Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Preferences (User Settings)" competence="Write,Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Write Access on All Objects</Col>
                                </Row>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} onChange={this.callback} style={{ marginBottom: "5px" }} expandIconPosition="right">
                            <Panel header={<UserPanelHeader title="Preferences (System Settings)" competence="Read" />} key="1" style={{ textAlign: "left", backgroundColor: "white", color: "white" }}>
                                <Row className="lamp_user_role_line">
                                    <Col span={24} style={{ textAlign: "left" }}>Have Read Access on All Objects</Col>
                                </Row>
                            </Panel>
                        </Collapse>

                    </Panel>
                </Collapse>
                <br />

            </div >
        );
    }
}
export default Review;