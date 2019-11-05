import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import intl from 'react-intl-universal'
class NasClientDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>{intl.get("samp.policyEngine.nasClients.item.nasName")}:</Col>
                        <Col span={12}>{this.props.item.nasName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>{intl.get("samp.policyEngine.nasClients.item.startNASIp")}:</Col>
                        <Col span={12}>{this.props.item.startNASIp}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>{intl.get("samp.policyEngine.nasClients.item.endNASIp")}:</Col>
                        <Col span={12}>{this.props.item.endNASIp}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>{intl.get("samp.policyEngine.nasClients.item.description")}:</Col>
                        <Col span={12}>{this.props.item.description}</Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default NasClientDetail;