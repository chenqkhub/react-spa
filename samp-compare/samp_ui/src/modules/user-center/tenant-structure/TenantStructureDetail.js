import React, { Component } from 'react';
import { Form, Row, Col, Icon, Input, Collapse, Tooltip, Tabs ,Table } from 'antd';
const { Panel } = Collapse
const { TabPane } = Tabs;
const { Search } = Input;
class CompanyPropertyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.item

        if (this.state.highestPriviligedRole === "Administrator") {

        }
    }
    componentDidMount() {
        console.log(this.props)
        let dataSource = []
        this.state.assignedRoles.map((item) => {
            let bean = {};
            bean.name = item;
            if (item === "Administrators") {
                bean.description = "Unrestricted Administrators"
            }
            if (item === "Network Administrators") {
                bean.description = "Can do everything; But edit Accounts"
            }
            if (item === "Writer") {
                bean.description = "Can Read and Write to switches"
            }
            if (item === "Reader") {
                bean.description = "Read-Only Users"
            }
            dataSource.push(bean)
        })
        this.setState({
            dataSource: dataSource
        })
    }
    render() {
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
                        <Col span={12}>Name:</Col>
                        <Col span={12}>{this.props.item.name}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Highest Priviliged Role:</Col>
                        <Col span={12}>{this.props.item.highestPriviligedRole}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Description:</Col>
                        <Col span={12}>{this.props.item.description}</Col>
                    </Row>
                    <br />

                    <Tabs>
                        <TabPane tab="Assigned Roles" key="1">
                            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                            <br/>
                            <Table columns={columns} dataSource={this.state.dataSource} size="middle" showHeader={false} />
                        </TabPane>
                    </Tabs>
                </Form>
            </div>
        );
    }
}

export default CompanyPropertyDetail;