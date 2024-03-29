import React, { Component } from 'react';
import { Row, Col } from 'antd'
class ReaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Row className="samp_detail_row_line">
                    <Col span={6} style={{ textAlign: "right" }}>Role Name:</Col>
                    <Col span={12}>
                        <span style={{ marginLeft: "10px" }}>
                            Read
                        </span>
                    </Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={6} style={{ textAlign: "right" }}>Description:</Col>
                    <Col span={12}>
                        <span style={{ marginLeft: "10px" }}>
                            Read-Only Users
                        </span>
                    </Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={6} style={{ textAlign: "right" }}>System-Defined:</Col>
                    <Col span={12}>
                        <span style={{ marginLeft: "10px" }}>
                            System-Defined
                        </span>
                    </Col>
                </Row>
                <Row className="samp_detail_row_line">
                    <Col span={6} style={{ textAlign: "right" }}>Accessible Maps:</Col>
                    <Col span={12}>
                        <span style={{ marginLeft: "10px" }}>
                            All Maps (Can access all devices in the network)
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ReaderComponent