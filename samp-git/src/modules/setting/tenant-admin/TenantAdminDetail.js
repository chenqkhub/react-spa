import React, { Component } from 'react';
import { Form, Row, Col, Icon, Collapse, Input, Tabs, Button, Table } from 'antd';
const { Panel } = Collapse
const { TabPane } = Tabs;
const { Search } = Input;


class TenantAdminDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            currentUserRole: []
        }
        console.log(this.props);
    }

    componentDidMount() {
        console.log(this.props)
        let dataSource = []
        this.props.item.memberOf.map((item) => {
            let bean = {};
            bean.name = item;
            if (item === "Administrators") {
                bean.description = "Unrestricted Administrator"
            }
            if (item === "Reader") {
                bean.description = "Read-Only User"
            }
            if (item === "Writer") {
                bean.description = "Can Read and Write to Switches"
            }
            if (item === "Default") {
                bean.description = "Read-Only User"
            }
            if (item === "Network Administrators") {
                bean.description = "Can Do Everything But Edit Accounts"
            }
            dataSource.push(bean)
        })
        this.setState({
            dataSource: dataSource
        })


    }
    getCurrentUserRole = () => {
        console.log(this.props.item.highestPriviligedRole)

    }
    render() {
        const operations = <Button>Extra Action</Button>;
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Description',
                dataIndex: 'description',
            },
        ]

        return (
            <div>
                <Form layout="vertical" hideRequiredMark>
                    <Row className="samp_detail_row_line">
                        <Col span={6} style={{ textAlign: "right" }}>Login Name:</Col>
                        <Col span={12}>
                            <span style={{ marginLeft: "10px" }}>
                                {this.props.item.loginName}
                            </span>
                        </Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={6} style={{ textAlign: "right" }}>Description:</Col>
                        <Col span={12}>
                            <span style={{ marginLeft: "10px" }}>
                                {this.props.item.description}
                            </span>
                        </Col>
                    </Row>
                    <br />
                    <Tabs>
                        <TabPane tab="Assigned Roles" key="1">
                            <Table columns={columns} dataSource={this.state.dataSource} size="middle" showHeader={false} />
                        </TabPane>
                    </Tabs>
                </Form>
            </div>
        );
    }
}

export default TenantAdminDetail;