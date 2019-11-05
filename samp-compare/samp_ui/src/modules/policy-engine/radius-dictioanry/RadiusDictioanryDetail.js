import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
class RadiusDictioanryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row>
                        <Col span={12}>Attribute Name:</Col>
                        <Col span={12}>{this.props.item.name}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Vendor ID:</Col>
                        <Col span={12}>{this.props.item.vendorId}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Vendor Name:</Col>
                        <Col span={12}>{this.props.item.vendorName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Attribute Code:</Col>
                        <Col span={12}>{this.props.item.typeCode}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Value Type:</Col>
                        <Col span={12}>{this.props.item.valueType}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Access Policy:</Col>
                        <Col span={12}>{this.props.item.accessPolicy}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Enforcement Policy:</Col>
                        <Col span={12}>{this.props.item.authEnforcement}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Radius-DM:</Col>
                        <Col span={12}>{this.props.item.dm}</Col>
                    </Row>
                    <Row className="samp_detail_row_line"> 
                        <Col span={12}>sync to RADIUS:</Col>
                        <Col span={12}>{this.props.item.syncToRadius}</Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default RadiusDictioanryDetail;