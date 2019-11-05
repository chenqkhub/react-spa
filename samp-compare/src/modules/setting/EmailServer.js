import React, { Component } from 'react';
import { Form, Input, InputNumber, Switch, Select, Row, Col, Button } from 'antd';
import _ from "lodash"
import history from '../../history/History'
import hasErrors from '../../components/form-component/FormChecked'
import formItemLayout from '../../components/form-component/FormItemLayout'
const { TextArea } = Input
const { Option } = Select

class EmailServerRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailProtocol: "SMTP",
            serviceUrl: "",
            port: 25,
            sendFrom: "",
            smtpAuthentication: true,
            password: "",
            repeatPassword: "",
            securityType: "None",
            testEmail: "",
            protocolSelector: ["IMAP", "POP", "SMTP"],
            securityTypeArray: ["None", "SSL", "TLS"],

        }
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    changeSmtpAuthentication = (value) => {
        this.setState({
            smtpAuthentication: value
        })
    }
    sendTestEmail = () => {

    }
    //保存
    save = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
            }
        });
    }
    //取消
    cancel = () => {

    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const emailProtocolError = isFieldTouched('emailProtocol') && getFieldError('emailProtocol');
        const serviceUrlError = isFieldTouched('serviceUrl') && getFieldError('serviceUrl');
        const portError = isFieldTouched('port') && getFieldError('port');
        const sendFromError = isFieldTouched('sendFrom') && getFieldError('sendFrom');
        const smtpAuthenticationError = isFieldTouched('smtpAuthentication') && getFieldError('smtpAuthentication');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const repeatPasswordError = isFieldTouched('repeatPassword') && getFieldError('repeatPassword');
        const securityTypeError = isFieldTouched('securityType') && getFieldError('securityType');
        const testEmailError = isFieldTouched('testEmail') ;
        //rules
        const rules = {
            emailProtocol: [
                {
                    required: true,
                    message: 'The filed is required.',
                }
            ],
            serviceUrl: [
                {
                    required: true,
                    message: 'The filed is required.',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 4 && _.size(value) <= 128 ? callback() : callback("The filed must be in 4-128 characters.")
                    }
                }
            ],
            port: [
                {
                    required: true,
                    message: 'The filed is required.',
                }
            ],
            sendFrom: [
                {
                    required: true,
                    message: 'The filed is required.',
                },
                {
                    type: "email",
                    message: "The filed is not valid E-mail."
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 4 && _.size(value) <= 64 ? callback() : callback("The filed must be in 4-64 characters.")
                    }
                }
            ],
            smtpAuthentication: [
                {
                    required: true,
                    message: 'The filed is required.',
                }
            ],
            password: [
                {
                    required: true,
                    message: 'The filed is required.',
                },
                {
                    validator: (rule, value, callback) => {
                        const { form } = this.props;
                        if (value) {
                            form.validateFields(['repeatPassword'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            repeatPassword: [
                {
                    required: true,
                    message: 'The filed is required.',
                },
                {
                    validator: (rule, value, callback) => {
                        const { form } = this.props;
                        if (value && value !== form.getFieldValue('password')) {
                            callback('Two passwords that you enter is inconsistent!');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            securityType: [
                {
                    required: true,
                    message: 'The filed is required.',
                }
            ],
            testEmail: [
                {
                    type: "email",
                    message: "The filed is not valid E-mail."
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 0 && _.size(value) <= 64 ? callback() : callback("The filed must be in 4-64 characters.")
                    }
                }
            ]
        }
        const children = [];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        Email Server
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">

                        <Form.Item label="Email Protocol" hasFeedback validateStatus={emailProtocolError ? 'error' : ''} help={emailProtocolError || ''}>
                            {getFieldDecorator('emailProtocol', { initialValue: this.state.emailProtocol, rules: rules.emailProtocol })(
                                <Select
                                    placeholder="Please select"
                                    disabled={true}
                                >
                                    {
                                        this.state.protocolSelector.map((item) => {
                                            return <Option key={item} value={item}>{item}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="SMTP Server" validateStatus={serviceUrlError ? 'error' : ''} help={serviceUrlError || ''}>
                            {getFieldDecorator('serviceUrl', { initialValue: this.state.serviceUrl, rules: rules.serviceUrl })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item label="Port" validateStatus={portError ? 'error' : ''} help={portError || ''}>
                            {getFieldDecorator('port', { initialValue: this.state.port, rules: rules.port })(
                                <InputNumber style={{ width: "100%" }} min={1} max={65535} />
                            )}
                        </Form.Item>
                        <Form.Item label="Send From" validateStatus={sendFromError ? 'error' : ''} help={sendFromError || ''}>
                            {getFieldDecorator('sendFrom', { initialValue: this.state.sendFrom, rules: rules.sendFrom })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="SMTP Authentication" validateStatus={smtpAuthenticationError ? 'error' : ''} help={smtpAuthenticationError || ''}>
                            {getFieldDecorator('smtpAuthentication', { initialValue: this.state.smtpAuthentication, rules: rules.smtpAuthentication })(
                                <Switch style={{ float: "left" }} checkedChildren="ON" unCheckedChildren="OFF" checked={this.state.smtpAuthentication} onChange={this.changeSmtpAuthentication} />
                            )}
                        </Form.Item>
                        {
                            this.state.smtpAuthentication ?
                                <div>
                                    <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                                        {getFieldDecorator('password', { initialValue: this.state.password, rules: rules.password })(
                                            <Input />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Repeat Password" validateStatus={repeatPasswordError ? 'error' : ''} help={repeatPasswordError || ''}>
                                        {getFieldDecorator('repeatPassword', { initialValue: this.state.repeatPassword, rules: rules.repeatPassword })(
                                            <Input />
                                        )}
                                    </Form.Item>
                                </div> : ""
                        }
                        <Form.Item label="Security Type" hasFeedback validateStatus={securityTypeError ? 'error' : ''} help={securityTypeError || ''}>
                            {getFieldDecorator('securityType', { initialValue: this.state.securityType, rules: rules.securityType })(
                                <Select
                                    placeholder="Please select"
                                >
                                    {
                                        this.state.securityTypeArray.map((item) => {
                                            return <Option key={item} value={item}>{item}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <hr />
                        <Form.Item label="'To' Address to Test" validateStatus={testEmailError ? 'error' : ''} help={testEmailError || ''}>
                            {getFieldDecorator('testEmail', { initialValue: this.state.testEmail, rules: rules.testEmail })(
                                <Input />
                            )}
                        </Form.Item>
                        <Row>
                            <Col span={5}></Col>
                            <Col span={19} style={{ textAlign: "left" }}>
                                <Button type="primary" onClick={this.sendTestEmail}>Send Test Email</Button>
                            </Col>
                        </Row>
                        <br />
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                <Button type="primary" onClick={this.save} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                    Save
                                </Button>
                                <Button type="primary" onClick={this.cancel} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const EmailServer = Form.create()(EmailServerRegister);
export default EmailServer;