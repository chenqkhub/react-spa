import React, { Component } from 'react';
import { Form, Row, Col, Button, Icon, Input, Table, Drawer, Modal, Collapse, Tooltip } from 'antd';
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
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Name:</Col>
                        <Col span={12}>{this.props.item.name}</Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default LdapRoleMappingDetail;