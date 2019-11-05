import React, { Component } from 'react';
import { Form, Row, Col, Button, Icon, Input, Table, Drawer, Modal } from 'antd';
class CaptivaPortalAccessRecordDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Form layout="vertical" hideRequiredMark>
                <Row>
                    <Col span={12}>Device Mac:</Col>
                    <Col span={12}>{this.props.item.deviceMac}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Account:</Col>
                    <Col span={12}>{this.props.item.account}</Col>
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
                    <Col span={12}>Association SSID:</Col>
                    <Col span={12}>{this.props.item.associationSSID}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Access Time:</Col>
                    <Col span={12}>{this.props.item.recordTime}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Auth Result:</Col>
                    <Col span={12}>{this.props.item.authResult}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Reject Reason:</Col>
                    <Col span={12}>{this.props.item.rejectReason}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Success Redirect:</Col>
                    <Col span={12}>{this.props.item.successRedirect}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>User-Agent:</Col>
                    <Col span={12}>{this.props.item.userAgent}</Col>
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
                    <Col span={12}>Device OS:</Col>
                    <Col span={12}>{this.props.item.deviceOS}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Device Category:</Col>
                    <Col span={12}>{this.props.item.deviceCategory}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Device Brand:</Col>
                    <Col span={12}>{this.props.item.deviceBrand}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Authentication Type:</Col>
                    <Col span={12}>{this.props.item.authenticationType}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Association SSID:</Col>
                    <Col span={12}>{this.props.item.browserGroup}</Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={12}>Login Time:</Col>
                    <Col span={12}>{this.props.item.loginTime}</Col>
                </Row>
            </Form>
        );
    }
}

export default CaptivaPortalAccessRecordDetail;