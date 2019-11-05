import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import formatDate from '../../../components/utils/DateFormat'
class NasClientDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Name:</Col>
                        <Col span={12}>{this.props.item.actor}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Group:</Col>
                        <Col span={12}>{this.props.item.jobGroup}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Description:</Col>
                        <Col span={12}>{this.props.item.jobDescription}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Select Device Type:</Col>
                        <Col span={12}>Device Families</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Overlap Policy:</Col>
                        <Col span={12}>Ignore When Overlap</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Action From Crash Policy:</Col>
                        <Col span={12}>Start Afresh From Crash</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Start Time:</Col>
                        <Col span={12}>{formatDate(this.state.startTime)}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>End Time:</Col>
                        <Col span={12}>None</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Schedule:</Col>
                        <Col span={12}>Simple</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Interval:</Col>
                        <Col span={12}>{this.props.item.repeatInterval} day(s)</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Retry Count:</Col>
                        <Col span={12}>{this.props.item.retryCount} time(s)</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Retry Interval:</Col>
                        <Col span={12}>{this.props.item.retryInterval} sec(s)</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Timeout:</Col>
                        <Col span={12}>{this.props.item.timeOut} sec(s)</Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default NasClientDetail;