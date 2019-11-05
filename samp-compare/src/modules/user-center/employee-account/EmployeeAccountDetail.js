import React, { Component } from 'react';
import UserPanelHeader from '../../../components/custom-collapse/UserPanelHeader'
import Reader from '../../../components/user-role/Reader'
import Writer from '../../../components/user-role/Writer'
import NetworkAdmin from '../../../components/user-role/NetworkAdmin'
import AdminAccount from '../../../components/user-role/AdminAccount'
import  formatDate from '../../../components/utils/DateFormat'
import { Form, Row, Col, Icon, Input, Table, Collapse, Tooltip, Tabs } from 'antd';
const { Panel } = Collapse
const { TabPane } = Tabs;
const { Search } = Input;
class CompanyPropertyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.item
    }
    componentDidMount() {
        console.log(this.props)
        let dataSource = []
        this.state.memberOf.map((item) => {
            let bean = {};
            bean.name = item;
            if (item === "Han") {
                bean.description = "Huaxin Aotian Network Technology Co., Ltd."
            }
            if (item === "Han-HR") {
                bean.description = "Human resources of Huaxin Aotian."
            }
            if (item === "Han-Finance") {
                bean.description = "Finance Department of Huaxin Aotian."
            }
            if (item === "Han-Dev") {
                bean.description = "R&D Department of Huaxin Aotian."
            }
            if (item === "Han-Test") {
                bean.description = "Testing Department of Huaxin Aotian."
            }
            dataSource.push(bean)
        })
        this.setState({
            dataSource: dataSource
        })

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
                        <Col span={12}>Username:</Col>
                        <Col span={12}>{this.state.username}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Telephone:</Col>
                        <Col span={12}>{this.state.telephone}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Email:</Col>
                        <Col span={12}>{this.state.email}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Access Role Profile:</Col>
                        <Col span={12}>{this.state.accessRoleProfile}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Policy List:</Col>
                        <Col span={12}>{this.state.policyList}</Col>
                    </Row>

                    {
                        this.state.otherAttributesVOs && this.state.otherAttributesVOs.map((item) => {
                            return (
                                <Row className="samp_detail_row_line" key={item.key+item.value}>
                                    <Col span={12}>{item.key}</Col>
                                    <Col span={12}>{item.value}</Col>
                                </Row>
                            )

                        })
                    }
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Effective Date:</Col>
                        <Col span={12}>{formatDate(this.state.dateOfEffective)}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Department:</Col>
                        <Col span={12}>{this.state.department}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Position:</Col>
                        <Col span={12}>{this.state.position}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Status:</Col>
                        <Col span={12}>{this.state.status}</Col>
                    </Row>
                    <Row className="samp_detail_row_line">
                        <Col span={12}>Description:</Col>
                        <Col span={12}>{this.state.description}</Col>
                    </Row>
                    <br />
                    <Tabs>
                        {/* <TabPane tab="Assigned Roles" key="1">
                            {
                                this.state.highestPriviligedRole === "Administrator" ?
                                    <AdminAccount /> : (this.state.highestPriviligedRole === "Network Administrator" ?
                                        <NetworkAdmin /> : (this.state.highestPriviligedRole === "Writer" ?
                                            <Writer /> : (this.state.highestPriviligedRole === "Reader" ? <Reader /> : "")))
                            }
                            <br />
                            
                        </TabPane> */}
                        <TabPane tab="Assigned Groups" key="2">
                            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                            <Table columns={columns} dataSource={this.state.dataSource} size="middle" showHeader={false} />
                        </TabPane>
                    </Tabs>
                </Form>
            </div>
        );
    }
}

export default CompanyPropertyDetail;