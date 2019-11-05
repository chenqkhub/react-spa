import React, { Component } from 'react';
import { Form, Row, Col, Icon,  Collapse, Tooltip } from 'antd';
const { Panel } = Collapse
class LdapRoleMappingDetail extends Component {
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
                        <Col span={12}>Priority:</Col>
                        <Col span={12}>{this.props.item.priority}</Col>
                    </Row>
                    <br/>
                    <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']}>
                        <Panel header="LDAP/AD Attributes Condition" key="1" extra={genExtra()} className="samp_detail_collapse_header">

                            {
                                this.props.item.conditions && this.props.item.conditions.map((item) => {
                                    return (
                                        <Row style={{ marginTop: "5px" }} key={item.key+item.value}>
                                            <Col span={12}>{item.key}:</Col>
                                            <Col span={12}>{item.value}</Col>
                                        </Row>
                                    )

                                })
                            }

                        </Panel>
                    </Collapse>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Default Access Role Profile:</Col>
                        <Col span={12}>{this.props.item.mappingARPName}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Default Policy List:</Col>
                        <Col span={12}>{this.props.item.mappingPLName}</Col>
                    </Row>
                    {this.props.item.otherAttributesVOs.map((item) => {
                        return (
                            <Row className="samp_detail_row_line" key={item.key+item.value}>
                                <Col span={12}>{item.key}:</Col>
                                <Col span={12}>{item.value}</Col>
                            </Row>
                        )
                    })}
                </Form>
            </div>
        );
    }
}

export default LdapRoleMappingDetail;