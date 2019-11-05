import React, { Component } from 'react';
import { Input, Form, Row, Col, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: { span: 18 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 18 },
        sm: { span: 16 },
    },
};
class RoleInfoMapAccessRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const children = []
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ width: "100%" }}>
                <Form {...formItemLayout} labelAlign="right" style={{ width: "100%" }}>
                    <div style={{ textAlign: "left",marginLeft:"5px",fontSize:"16px" }}>
                        Role Info and Map Access
                    </div>
                    <div style={{ textAlign: "left",marginLeft:"10px" }}>
                        Provide basic information and control access to Maps
                    </div>
                    <hr />
                    <Form.Item label="Role Name">
                        {getFieldDecorator('roleName', {
                            rules: [

                                {
                                    required: true,
                                    message: 'Please input your Policy Name!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Description">
                        {getFieldDecorator('description', {
                            rules: [

                                {
                                    required: true,
                                    message: 'Please input your Policy Name!',
                                },
                            ],
                        })(<TextArea />)}
                    </Form.Item>
                    <Form.Item label="Accessible Maps">
                        {getFieldDecorator('accessibleMapType', {
                            rules: [

                                {
                                    required: true,
                                    message: 'Please input your Policy Name!',
                                },
                            ],
                        })(
                            <Select
                                mode="multiple"
                                placeholder="Please select"
                                initialValue={this.state.autheticationStrageArry}
                                onChange={this.handleChange}
                                style={{ width: '100%' }}
                            >
                                <Option key="All-Maps-(Can-access-all-devices-in-the-network)">All Maps (Can access all devices in the network)</Option>
                                <Option key="No Maps (Cannot access any devices in the network)">No Maps (Cannot access any devices in the network)</Option>
                                <Option key="Selected-Maps">Selected Maps</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <br/>
                </Form>
            </div>
        );
    }
}
const RoleInfoMapAccess = Form.create()(RoleInfoMapAccessRegister)
export default RoleInfoMapAccess;