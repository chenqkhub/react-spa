import React, { Component } from 'react';
import { Form, Row, Col, Button, Icon, Input, Table, Drawer, Modal, Collapse, Tooltip } from 'antd';
const { Panel } = Collapse
class GuestStrategyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                        <Col span={12}>Portal URL:</Col>
                        <Col span={12}>https://ov2500-upam-cportal.al-enterprise.com:443/sponsor/byod/api/ham/jump?strategyName=3b9168539c1cba3e69b9d49c8232362c</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Authentication Resource:</Col>
                        <Col span={12}>{this.props.item.authenticationAgainst}</Col>
                    </Row>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                        <Panel header="Login Strategy" key="1" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Login By:</Col>
                                <Col span={12}>{this.props.item.loginBy}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Social Media Account:</Col>
                                <Col span={12}>{this.props.item.socialMediaAccount}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Portal Server Domain:</Col>
                                <Col span={12}>{this.props.item.portalServerDomain}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Facebook OAuth Client ID:</Col>
                                <Col span={12}>{this.props.item.facebookOAuthClientID}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Facebook Authorized Origins:</Col>
                                <Col span={12}></Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Google Plus OAuth Client ID:</Col>
                                <Col span={12}>{this.props.item.googlePlusOAuthClientID}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Google Authorized Origins:</Col>
                                <Col span={12}></Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Rainbow OAuth Client ID:</Col>
                                <Col span={12}>{this.props.item.rainbowOAuthClientID}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>WeChat APPID:</Col>
                                <Col span={12}>{this.props.item.wechatAppID}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Shop Id:</Col>
                                <Col span={12}>{this.props.item.shopID}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>SecretKey:</Col>
                                <Col span={12}>{this.props.item.secretKey}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Open APP ID:</Col>
                                <Col span={12}>{this.props.item.openAppID}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Success Redirect URL:</Col>
                                <Col span={12}>{this.props.item.successRedirectUrl}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Fixed URL:</Col>
                                <Col span={12}>{this.props.item.url}</Col>
                            </Row>
                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                        <Panel header="Post Portal Authentication Enforcement" key="1" className="samp_detail_collapse_header">
                            <Row >
                                <Col span={12}>Fixed Access Role Profile:</Col>
                                <Col span={12}>{this.props.item.fixedAccessRoleProfile}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Fixed Policy List:</Col>
                                <Col span={12}>{this.props.item.fixedPolicyList}</Col>
                            </Row>
                            {
                                this.props.item.otherAttributesVOs && this.props.item.otherAttributesVOs.map((item) => {
                                    return (
                                        <Row style={{ marginTop: "5px" }} key={item.key}>
                                            <Col span={12}>{item.key}:</Col>
                                            <Col span={12}>{item.value}</Col>
                                        </Row>
                                    )

                                })
                            }
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Data Quota Status:</Col>
                                <Col span={12}>{this.props.item.dataQuotaEnabled}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Quota Exhausted URL:</Col>
                                <Col span={12}>{this.props.item.dataQuotaUrl}</Col>
                            </Row>
                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                        <Panel header="Self-Registration Strategy" key="1" className="samp_detail_collapse_header">
                            <Row >
                                <Col span={12}>Self-Registration:</Col>
                                <Col span={12}>{this.props.item.enableSelfRegistration}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Account Name Created By:</Col>
                                <Col span={12}>{this.props.item.registeredBy}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Password Creation:</Col>
                                <Col span={12}>{this.props.item.passwordCreationMethod}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Password Visibility:</Col>
                                <Col span={12}>{this.props.item.successNotification}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Approval:</Col>
                                <Col span={12}>{this.props.item.adminApproved}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Email Restriction:</Col>
                                <Col span={12}>{this.props.item.emailRestriction}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Email Suffix:</Col>
                                <Col span={12}>{this.props.item.allowedEmailSuffix}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Location-based Notification:</Col>
                                <Col span={12}>{this.props.item.location_site}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Authorize By Verification Code:</Col>
                                <Col span={12}>{this.props.item.authorizeVerificationCode}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Required Attributions:</Col>
                                <Col span={12}>{this.props.item.requiredAttributions}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Custom Attributes:</Col>
                                <Col span={12}>
                                    {
                                        this.props.item.selfRegisterCustomAttrList && this.props.item.selfRegisterCustomAttrList.map((itme) => {
                                            return <p key={itme.name}>{itme.name}</p>
                                        })
                                    }
                                </Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Service Level:</Col>
                                <Col span={12}></Col>
                            </Row>
                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                        <Panel header="WiFi4EU" key="1" className="samp_detail_collapse_header">
                            <Row >
                                <Col span={12}>WiFi4EU:</Col>
                                <Col span={12}>{this.props.item.wifi4EU}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Network Identifier:</Col>
                                <Col span={12}>{this.props.item.networkIdentifier}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Self Test Modus:</Col>
                                <Col span={12}>{this.props.item.selfTestModus}</Col>
                            </Row>
                        </Panel>
                    </Collapse>
                </Form>
            </div>
        );
    }
}

export default GuestStrategyDetail;