import React, { Component } from 'react';
import {Form, Row, Col} from 'antd'
class GuestAccountDetail extends Component {
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
                        <Col span={12}>Telephone:</Col>
                        <Col span={12}>{this.props.item.telephone}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Email:</Col>
                        <Col span={12}>{this.props.item.email}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Full Name:</Col>
                        <Col span={12}>{this.props.item.fullName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Company:</Col>
                        <Col span={12}>{this.props.item.company}</Col>
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
                        <Col span={12}>Data Quota:</Col>
                        <Col span={12}>{this.props.item.dataQuota}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Data Quota Amount:</Col>
                        <Col span={12}>{this.props.item.dataQuotaAmount/1000}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Sponsor Name:</Col>
                        <Col span={12}>{this.props.item.creator}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Online Devices:</Col>
                        <Col span={12}>{this.props.item.onlineDevice}</Col>
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

export default GuestAccountDetail;