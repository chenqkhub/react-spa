import React, { Component } from 'react';
import { Form, Row, Col, Button, Icon, Input, Table, Drawer, Modal, Collapse, Tooltip } from 'antd';
const { Panel } = Collapse
class AuthenticationStrategyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(this.props)
    }

    render() {
        const genExtra = () => (
            <Tooltip title="All conditions must be met">
                <Icon
                    type="info-circle"
                    onClick={event => {
                        // If you don't want click extra trigger collapse, you can prevent this:
                        event.stopPropagation();
                    }}
                />
            </Tooltip>
        )
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Strategy Name:</Col>
                        <Col span={12}>{this.props.item.strategyName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Authentication Source:</Col>
                        <Col span={12}>{this.props.item.authenticationAgainst}</Col>
                    </Row>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']}>
                        <Panel header="Access Policy" key="1" className="samp_detail_collapse_header">
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Policy Name:</Col>
                                <Col span={12}>{this.props.item.policyName}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Priority:</Col>
                                <Col span={12}>{this.props.item.priority}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']}>
                                    <Panel header="Mapping Condition" key="1" extra={genExtra()} className="samp_detail_collapse_header">
                                        {
                                            this.props.item.conditions && this.props.item.conditions.map((item) => {
                                                return (
                                                    <Row style={{ marginTop: "5px" }} key={item.key + item.value}>
                                                        <Col span={12}>{item.key}</Col>
                                                        <Col span={12}>{item.value}</Col>
                                                    </Row>
                                                )

                                            })
                                        }
                                    </Panel>
                                </Collapse>
                            </Row>
                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']}>
                        <Panel header="Network Enforcement Policy" key="1" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Default Access Role Profile:</Col>
                                <Col span={12}>{this.props.item.defaultARPName}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Default Policy List:</Col>
                                <Col span={12}>{this.props.item.defaultPLName}</Col>
                            </Row>
                            {
                                this.props.item.otherAttributesVOs && this.props.item.otherAttributesVOs.map((item) => {
                                    return (
                                        <Row className="samp_detail_row_line" key={item.key}>
                                            <Col span={12}>{item.key}:</Col>
                                            <Col span={12}>{item.value}</Col>
                                        </Row>
                                    )
                                })
                            }

                        </Panel>
                    </Collapse>
                    <br />
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']}>
                        <Panel header="WEB Redirection Enforcement Policy" key="1" className="samp_detail_collapse_header">
                            <Row>
                                <Col span={12}>Web Authentication:</Col>
                                <Col span={12}>{this.props.item.webAuthentication}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Guest Access Strategy:</Col>
                                <Col span={12}>{this.props.item.guestStrategy}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>BYOD Access Strategy:</Col>
                                <Col span={12}>{this.props.item.employeeStrategy}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>New Enforcement Policy:</Col>
                                <Col span={12}>{this.props.item.reloadARP}</Col>
                            </Row>
                            <Row className="samp_detail_row_line">
                                <Col span={12}>Remember New Enforcement Policy:</Col>
                                <Col span={12}>{this.props.item.overwriteARP}</Col>
                            </Row>

                        </Panel>
                    </Collapse>

                </Form>
            </div>
        );
    }
}

export default AuthenticationStrategyDetail;