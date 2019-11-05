import React, { Component } from 'react';
import {Form, Row, Col} from 'antd'
class GuestAccessCodeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row>
                        <Col span={12}>Guest Type:</Col>
                        <Col span={12}>{this.props.item.accountType}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Account Name:</Col>
                        <Col span={12}>{this.props.item.accountName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Guest Name:</Col>
                        <Col span={12}>{this.props.item.accountName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Effective Date:</Col>
                        <Col span={12}>{this.props.item.dateOfEffective}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Expire Time:</Col>
                        <Col span={12}>{this.props.item.expireTime}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Service Level:</Col>
                        <Col span={12}>{this.props.item.serviceLevel}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Sponsor Name:</Col>
                        <Col span={12}>{this.props.item.creator}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Status:</Col>
                        <Col span={12}>{this.props.item.status}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Description:</Col>
                        <Col span={12}>{this.props.item.description}</Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default GuestAccessCodeDetail;