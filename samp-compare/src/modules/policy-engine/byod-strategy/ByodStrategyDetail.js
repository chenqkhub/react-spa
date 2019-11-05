import React, { Component } from 'react';
import { Form, Row, Col, Button, Icon, Input, Table, Drawer, Modal, Collapse, Tooltip } from 'antd';
const { Panel } = Collapse
class ByodStrategyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row>
                        <Col span={12}>Strategy Name:</Col>
                        <Col span={12}>{this.props.item.strategyName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Redirection Strategy:</Col>
                        <Col span={12}>{this.props.item.redirectionStrategy}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Mode:</Col>
                        <Col span={12}>{this.props.item.protocolMode}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>IP/FQDN:</Col>
                        <Col span={12}>{this.props.item.fqdnMode}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>BYOD Self Service Portal URL:</Col>
                        <Col span={12}>https://ov2500-upam-cportal.al-enterprise.com:443/sponsor/byod/api/ham/jump?strategyName=3b9168539c1cba3e69b9d49c8232362c</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Authentication Source:</Col>
                        <Col span={12}>{this.props.item.authenticationAgainst}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Portal URL:</Col>
                        <Col span={12}>https://ov2500-upam-cportal.al-enterprise.com:443/sponsor/byod/api/ham/jump?strategyName=3b9168539c1cba3e69b9d49c8232362c</Col>
                    </Row>
                    <br/>
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']}>
                        <Panel header="Registration Strategy" key="1" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Enable Role Mapping:</Col>
                                <Col span={12}>{this.props.item.enableRoleMapping}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>External Radius:</Col>
                                <Col span={12}>{this.props.item.partyRadius}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Period Unit:</Col>
                                <Col span={12}>{this.props.item.periodUnit}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Remember Device:</Col>
                                <Col span={12}>{this.props.item.rememberDevice}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Expire Setting:</Col>
                                <Col span={12}>{this.props.item.expireFlag===0?"Customization":"Never Expire"}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Device Validity Period:</Col>
                                <Col span={12}>{this.props.item.deviceValidityPeriodd}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Max Device Number Per Account:</Col>
                                <Col span={12}>{this.props.item.maxDeviceNumberPerAccount}</Col>
                            </Row>
                        </Panel>
                    </Collapse>
                    <br/>
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']}>
                        <Panel header="Login Strategy" key="1" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Success Redirect URL:</Col>
                                <Col span={12}>{this.props.item.successRedirectUrl}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Fixed URL:</Col>
                                <Col span={12}>{this.props.item.url}</Col>
                            </Row>
                        </Panel>
                    </Collapse>
                    <br/>
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']}>
                        <Panel header="Post Portal Authentication Enforcement" key="1" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Fixed Access Role Profile:</Col>
                                <Col span={12}>{this.props.item.fixedAccessRoleProfile}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Fixed Policy List:</Col>
                                <Col span={12}>{this.props.item.fixedPolicyList}</Col>
                            </Row>
                            {
                                this.props.item.otherAttributesVOs.map((item) => {
                                    return (
                                        <Row style={{ marginTop: "5px" }} key={item.key}>
                                            <Col span={12}>{item.key}:</Col>
                                            <Col span={12}>{item.value}</Col>
                                        </Row>
                                    )

                                })
                            }
                        </Panel>
                    </Collapse>
                </Form>
            </div>
        );
    }
}

export default ByodStrategyDetail;