import React, { Component } from 'react';
import { Form, Row, Col, Icon, Collapse, Tooltip } from 'antd';
const { Panel } = Collapse
class CompanyPropertyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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

        );
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row>
                        <Col span={12}>Device Mac:</Col>
                        <Col span={12}>{this.props.item.deviceMac}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Device Name:</Col>
                        <Col span={12}>{this.props.item.deviceName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Employee Account:</Col>
                        <Col span={12}>{this.props.item.account}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Device Category:</Col>
                        <Col span={12}>{this.props.item.deviceCategory}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Device Family:</Col>
                        <Col span={12}>{this.props.item.deviceFamily}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Device OS:</Col>
                        <Col span={12}>{this.props.item.deviceOS}</Col>
                    </Row>

                    <Row className="samp_detail_row_line">
                        <Col span={12}>Access Role Profile:</Col>
                        <Col span={12}>{this.props.item.accessRoleProfile}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Policy List:</Col>
                        <Col span={12}>{this.props.item.policyList}</Col>
                    </Row>
                    {
                        this.props.item.otherAttributesVOs.map((item) => {
                            return (
                                <Row style={{ marginTop: "5px" }} key={item.key}>
                                    <Col span={12}>{item.key}</Col>
                                    <Col span={12}>{item.value}</Col>
                                </Row>
                            )

                        })
                    }
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Effective Date:</Col>
                        <Col span={12}>{this.props.item.dateOfEffective}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Last Access Location:</Col>
                        <Col span={12}>{this.props.item.lastAccessLocation}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Last Authentication Time:</Col>
                        <Col span={12}>{this.props.item.lastAuthenticationTime}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Status:</Col>
                        <Col span={12}>{this.props.item.status}</Col>
                    </Row>

                </Form>
            </div>
        );
    }
}

export default CompanyPropertyDetail;