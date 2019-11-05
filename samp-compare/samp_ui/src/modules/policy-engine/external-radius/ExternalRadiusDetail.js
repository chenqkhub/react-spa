import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
class ExternalRadiusDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Server Name:</Col>
                        <Col span={12}>{this.props.item.serverName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Host Name/IP Address:</Col>
                        <Col span={12}>{this.props.item.hostName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Backup Host Name/IP Address:</Col>
                        <Col span={12}>{this.props.item.backupHostName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Retries:</Col>
                        <Col span={12}>{this.props.item.retries}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Timeout:</Col>
                        <Col span={12}>{this.props.item.timeout}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Authentication Port:</Col>
                        <Col span={12}>{this.props.item.authenticationPort}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Accounting Port:</Col>
                        <Col span={12}>{this.props.item.accountingPort}</Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default ExternalRadiusDetail;