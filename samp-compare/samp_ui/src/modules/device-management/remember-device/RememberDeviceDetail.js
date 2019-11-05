import React, { Component } from 'react';
import { Form, Row, Col, Button, Icon, Input, Table, Drawer, Modal, Collapse, Tooltip } from 'antd';
const { Panel } = Collapse
class OnlineDeviceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']}>
                        <Panel header="Basic" key="1" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Account Name:</Col>
                                <Col span={12}>{this.props.item.account}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Device MAC:</Col>
                                <Col span={12}>{this.props.item.deviceMAC}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Client IPv4:</Col>
                                <Col span={12}>{this.props.item.deviceIp}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Client IPv6:</Col>
                                <Col span={12}>{this.props.item.deviceIpv6}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Device Category:</Col>
                                <Col span={12}>{this.props.item.deviceCategory}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Device OS:</Col>
                                <Col span={12}>{this.props.item.deviceOS}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Device Family:</Col>
                                <Col span={12}>{this.props.item.deviceFamily}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Browser Type:</Col>
                                <Col span={12}>{this.props.item.browserType}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Browser Type:</Col>
                                <Col span={12}>{this.props.item.browserType}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Status:</Col>
                                <Col span={12}>{this.props.item.status}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Expire Time:</Col>
                                <Col span={12}>{this.props.item.expireTime}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Remembered Time:</Col>
                                <Col span={12}>{this.props.item.rememberedTime}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Remembered Time:</Col>
                                <Col span={12}>{this.props.item.rememberedTime}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Web Access Strategy:</Col>
                                <Col span={12}>{this.props.item.strategyName}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Remember Method:</Col>
                                <Col span={12}>{this.props.item.rememberMethod}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Active Status:</Col>
                                <Col span={12}>{this.props.item.activeStatus}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Description:</Col>
                                <Col span={12}>{this.props.item.description}</Col>
                            </Row>
                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['2']}>
                        <Panel header="Enforcement Policy" key="2" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Access Role Profile:</Col>
                                <Col span={12}>{this.props.item.filterId}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Policy List:</Col>
                                <Col span={12}>{this.props.item.policyList}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Interim Interval:</Col>
                                <Col span={12}>{this.props.item.acctInterimInterval}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Session Timeout:</Col>
                                <Col span={12}>{this.props.item.sessionTimeout}</Col>
                            </Row>
                            
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Upstream Bandwidth:</Col>
                                <Col span={12}>{this.props.item.upstreamBandwidth}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Downstream Bandwidth:</Col>
                                <Col span={12}>{this.props.item.downstreamBandwidth}</Col>
                            </Row>

                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['3']}>
                        <Panel header="Access Information" key="3" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Last Access Time:</Col>
                                <Col span={12}>{this.props.item.authenticationMethod}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Last Access Device MAC:</Col>
                                <Col span={12}>{this.props.item.lastAccessDeviceMAC}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Last Access Device Name:</Col>
                                <Col span={12}>{this.props.item.lastAccessDeviceName}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Last Access Device SSID:</Col>
                                <Col span={12}>{this.props.item.lastAccessDeviceSSID}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Last Access Device Location:</Col>
                                <Col span={12}>{this.props.item.lastAccessDeviceLocation}</Col>
                            </Row>
                            
                        </Panel>
                    </Collapse>
                    <br />
                    
                </Form>
            </div>
        );
    }
}

export default OnlineDeviceDetail;