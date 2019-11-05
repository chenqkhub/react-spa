import React, { Component } from 'react';
import { Icon, Input, Tooltip, Row, Form, Col, Button, Alert, Checkbox, Select } from 'antd';
const { Option } = Select;

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 8 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 16 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 16,
                    offset: 8,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
       
        return (

            <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{color:"#ffffff"}}>
                <Form.Item label="Username">
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid Username!',
                            },
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="Confirm Password" hasFeedback>
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item label="Company" hasFeedback >
                    {getFieldDecorator('company', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your company!',
                            }
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Address" hasFeedback >
                    {getFieldDecorator('address', {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm company address!',
                            }
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Emial&nbsp;
                            <Tooltip title="Input Telephone can help you retrieve the password">
                                <Icon type="info-circle" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('emial', {
                        rules: [{ required: true, message: 'Input Email can help you retrieve the password' }],
                    })(<Input style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Telephone&nbsp;
                            <Tooltip title="Input Telephone can help you retrieve the password">
                                <Icon type="info-circle" />
                            </Tooltip>
                        </span>
                    }
                >
                    {getFieldDecorator('telephone', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Verification Code">
                    <Row gutter={8}>
                        <Col span={9}>
                            {getFieldDecorator('captcha', {
                                rules: [{ required: true, message: 'Please input the Verification Code you got!' }],
                            })(<Input />)}
                        </Col>
                        <Col span={15}>
                            <Button type="primary" style={{width:"100%"}}>Get Verification Code</Button>
                        </Col>
                    </Row>
                </Form.Item>
                
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    )}
                </Form.Item>
                <Row>
                    <Col span={8}></Col>
                    <Col span={16}>
                        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                            Register
                    </Button>
                    </Col>
                </Row>        
            </Form>
        );
    }
}

export default Form.create()(RegisterForm);