import React, { Component } from 'react';
import { Form, Row, Col } from 'antd';
import layout_welcome_1 from '../../assets/images/portal-img/layout1/layout_welcome.png'
import layout_welcome_2 from '../../assets/images/portal-img/layout2/layout_welcome.png'
import layout_welcome_3 from '../../assets/images/portal-img/layout3/layout_welcome.png'
import layout_welcome_4 from '../../assets/images/portal-img/layout4/layout_welcome.png'
import layout_welcome_5 from '../../assets/images/portal-img/layout5/layout_welcome.png'
import layout_welcome_6 from '../../assets/images/portal-img/layout6/layout_welcome.png'
import layout_success_1 from '../../assets/images/portal-img/layout1/layout_success.png'
import layout_success_2 from '../../assets/images/portal-img/layout2/layout_success.png'
import layout_success_3 from '../../assets/images/portal-img/layout3/layout_success.png'
import layout_success_4 from '../../assets/images/portal-img/layout4/layout_success.png'
import layout_success_5 from '../../assets/images/portal-img/layout5/layout_success.png'
import layout_success_6 from '../../assets/images/portal-img/layout6/layout_success.png'
class PortalPageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success_layout: {},
            welcome_layout: {}
        }
        
    }
    componentWillReceiveProps() {
        console.log(this.props.item)
        switch (this.props.item.templateName) {
            case "portalLayout1":
                this.setState({ success_layout: layout_success_1, welcome_layout: layout_welcome_1 })
                break;
            case "portalLayout2":
                this.setState({ success_layout: layout_success_2, welcome_layout: layout_welcome_2 })
                break;
            case "portalLayout3":
                this.setState({ success_layout: layout_success_3, welcome_layout: layout_welcome_3 })
                break;
            case "portalLayout4":
                this.setState({ success_layout: layout_success_4, welcome_layout: layout_welcome_4 })
                break;
            case "portalLayout5":
                this.setState({ success_layout: layout_success_5, welcome_layout: layout_welcome_5 })
                break;
            case "portalLayout6":
                this.setState({ success_layout: layout_success_6, welcome_layout: layout_welcome_6 })
                break;
        }
        
    }
    render() {
        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Portal Name:</Col>
                        <Col span={12}>{this.props.item.portalName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Template Name:</Col>
                        <Col span={12}>{this.props.item.templateName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Description:</Col>
                        <Col span={12}>{this.props.item.description}</Col>
                    </Row>
                    <hr />
                    <Row className="samp_detail_row_line">
                        <Col span={24} style={{ textAlign: "center" }}>
                            <a href="#">Welcome Preview Portal Page</a>
                        </Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={24} style={{ textAlign: "center" }}>
                            <a href="#">Success Preview Portal Page</a>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col span={24} style={{ textAlign: "center" }}>
                            Welcome Layout
                        </Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={24}>
                            <img style={{ width: "100%", height: "auto" }} 
                            src={this.state.welcome_layout} />
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <Row>
                        <Col span={24} style={{ textAlign: "center" }}>
                            Success Layout
                        </Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={24}>
                            <img style={{ width: "100%", height: "auto" }} 
                            src={this.state.success_layout} />
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default PortalPageDetail;