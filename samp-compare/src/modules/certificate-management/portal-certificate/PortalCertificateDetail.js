import React, { Component } from 'react';
import { Form, Row, Col, Icon, Tooltip } from 'antd';
class PortalCertificateDetail extends Component {
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
                        <Col span={12}>Name:</Col>
                        <Col span={12}>{this.props.item.name}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Server File Name:</Col>
                        <Col span={12}>{this.props.item.serverFileName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Key File Name:</Col>
                        <Col span={12}>{this.props.item.keyFileName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Type:</Col>
                        <Col span={12}>{this.props.item.type}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>CA File Name:</Col>
                        <Col span={12}>{this.props.item.caFileName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Validity Start Time:</Col>
                        <Col span={12}>{this.props.item.validityStartTime}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Validity Stop Time:</Col>
                        <Col span={12}>{this.props.item.validityStopTime}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Expiry Status:</Col>
                        <Col span={12}>{this.props.item.isExpiryStatus}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Using Status:</Col>
                        <Col span={12}>{this.props.item.usingStatus}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Issued by:</Col>
                        <Col span={12}>{this.props.item.from}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Issued to:</Col>
                        <Col span={12}>{this.props.item.to}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Selected FQDN:</Col>
                        <Col span={12}>{this.props.item.relateFQDN}</Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default PortalCertificateDetail;