import React, { Component } from 'react';
import { Form, Row, Col, Collapse } from 'antd';
const { Panel } = Collapse
class AuthenticationRecordDetail extends Component {
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
                                <Col span={12}>Account Type:</Col>
                                <Col span={12}>{this.props.item.accountType}</Col>
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
                                <Col span={12}>Device MAC:</Col>
                                <Col span={12}>{this.props.item.deviceMAC}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>User Name:</Col>
                                <Col span={12}>{this.props.item.userName}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Authentication Type:</Col>
                                <Col span={12}>{this.props.item.authenticationType}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Auth Resource:</Col>
                                <Col span={12}>{this.props.item.authResource}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Access Policy:</Col>
                                <Col span={12}>{this.props.item.accessPolicy}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Authentication Strategy:</Col>
                                <Col span={12}>{this.props.item.authenticationStrategy}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Web Access Strategy:</Col>
                                <Col span={12}>{this.props.item.webAccessStrategy}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Authentication Result:</Col>
                                <Col span={12}>{this.props.item.status}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Session Start:</Col>
                                <Col span={12}>{this.props.item.sessionStart}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Session Stop:</Col>
                                <Col span={12}>{this.props.item.sessionStop}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Redirect URL:</Col>
                                <Col span={12}>{this.props.item.redirectUrl}</Col>
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
                                <Col span={12}>Final Access Role Profile:</Col>
                                <Col span={12}>{this.props.item.finalfilterId}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Termination Action:</Col>
                                <Col span={12}>{this.props.item.terminationAction}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Session Timeout:</Col>
                                <Col span={12}>{this.props.item.sessionTimeout}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Interim Interval:</Col>
                                <Col span={12}>{this.props.item.acctInterimInterval}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Upstream Bandwidth:</Col>
                                <Col span={12}>{this.props.item.wisprBandwidthMaxUp}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Downstream Bandwidth:</Col>
                                <Col span={12}>{this.props.item.wisprBandwidthMaxDown}</Col>
                            </Row>

                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['3']}>
                        <Panel header="Authenticate" key="3" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Authentication Method:</Col>
                                <Col span={12}>{this.props.item.authenticationMethod}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Access Device MAC:</Col>
                                <Col span={12}>{this.props.item.accessDeviceMac}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Access Device Name:</Col>
                                <Col span={12}>{this.props.item.accessDeviceName}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Access Device SSID:</Col>
                                <Col span={12}>{this.props.item.accessDeviceSsid}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Access Device Location:</Col>
                                <Col span={12}>{this.props.item.accessDeviceLocation}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Called Station ID:</Col>
                                <Col span={12}>{this.props.item.calledStationId}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Access AP Group:</Col>
                                <Col span={12}>{this.props.item.alcatelAPGroup}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>NAS Port Type:</Col>
                                <Col span={12}>{this.props.item.nasPortType}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>NAS Port:</Col>
                                <Col span={12}>{this.props.item.nasPort}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>NAS Port ID:</Col>
                                <Col span={12}>{this.props.item.nasPortId}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>NAS ID:</Col>
                                <Col span={12}>{this.props.item.nasId}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>NAS IP Address:</Col>
                                <Col span={12}>{this.props.item.nasIp}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Slot/Port:</Col>
                                <Col span={12}>{this.props.item.slotPort}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Port Desc/WLAN Service:</Col>
                                <Col span={12}>{this.props.item.portDesc}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Framed MTU:</Col>
                                <Col span={12}>{this.props.item.framedMtu}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Reject Reason:</Col>
                                <Col span={12}>{this.props.item.rejectReason}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Roaming Information:</Col>
                                <Col span={12}>{this.props.item.roamingInformation}</Col>
                            </Row>
                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['4']}>
                        <Panel header="COA" key="4" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>COA Status:</Col>
                                <Col span={12}>{this.props.item.coaStatus}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>COA Error Cause:</Col>
                                <Col span={12}>{this.props.item.coaErrorCause}</Col>
                            </Row>                            
                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['5']}>
                        <Panel header="Accounting" key="5" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Acct Status Type:</Col>
                                <Col span={12}>{this.props.item.acctStatusType}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Session Time:</Col>
                                <Col span={12}>{this.props.item.sessionTime}</Col>
                            </Row>  
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Session ID:</Col>
                                <Col span={12}>{this.props.item.acctSessionId}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Input Packets:</Col>
                                <Col span={12}>{this.props.item.acctInputPackets}</Col>
                            </Row> 
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Output Packets:</Col>
                                <Col span={12}>{this.props.item.acctOutputPackets}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Input Octets:</Col>
                                <Col span={12}>{this.props.item.acctInputOctets}</Col>
                            </Row> 
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Output Octets:</Col>
                                <Col span={12}>{this.props.item.acctOutputOctets}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Input Gigawords:</Col>
                                <Col span={12}>{this.props.item.acctInputGigawords}</Col>
                            </Row> 
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Output Gigawords:</Col>
                                <Col span={12}>{this.props.item.acctOutputGigawords}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Tunnel Private Group ID:</Col>
                                <Col span={12}>{this.props.item.tunnelPrivateGroupID}</Col>
                            </Row> 
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Terminate Cause:</Col>
                                <Col span={12}>{this.props.item.acctTerminateCause}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Acct Multi SessionId:</Col>
                                <Col span={12}>{this.props.item.acctMultiSessionId}</Col>
                            </Row>                           
                        </Panel>
                    </Collapse>
                </Form>
            </div>
        );
    }
}

export default AuthenticationRecordDetail;