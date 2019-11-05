import React, { Component } from 'react';
import {Form, Row, Col} from 'antd'
class GuestOperatorDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Username:</Col>
                        <Col span={12}>{this.props.item.username}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Full Name:</Col>
                        <Col span={12}>{this.props.item.fullName}</Col>
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
                        <Col span={12}>Description:</Col>
                        <Col span={12}>{this.props.item.description}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Last Login Time:</Col>
                        <Col span={12}>{this.props.item.lastLoginTime}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Login URL:</Col>
                        <Col span={12}>{this.props.item.loginURL}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Location:</Col>
                        <Col span={12}>{this.props.item.location}</Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default GuestOperatorDetail;