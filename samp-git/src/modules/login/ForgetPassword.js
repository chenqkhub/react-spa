import React, { Component } from 'react';
import { Icon, Input, Tooltip, Row, Form, Col, Button, Alert } from 'antd';
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <Form {...formItemLayout} onSubmit={this.handleSubmit}>                
                <Form.Item label={
                        <span>
                            Telephone/Email
                        </span>
                    } hasFeedback >
                    {getFieldDecorator('telephone', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your telephone!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item label="Verification Code">
                    <Row gutter={8}>
                        <Col span={10}>
                            {getFieldDecorator('verificationCode', {
                                rules: [{ required: true, message: 'Please input the Verification Code you got!' }],
                            })(<Input />)}
                        </Col>
                        <Col span={14}>
                            <Button type="primary" style={{width:"100%"}}>Get Verification Code</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="New Password" hasFeedback >
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
                <Form.Item label="Repeat Password" hasFeedback >
                    {getFieldDecorator('rePassword', {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input.Password />)}
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(ForgetPassword);