import React, { Component } from 'react';
import { Form, Input, InputNumber, Switch, Select, Row, Col, Button } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
const { TextArea } = Input
const { Option } = Select
class ExternalLogServerRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            syslogSwitchStatus: false,
            serverType: "Database-MySQL",
            hostName: "",
            backupHostName: "",
            port: 25,
            username: "",
            password: "",
            repeatPassword: "",
            dbName: "",
            securityTypeArray: ["Database-MySQL", "Database-MSSQL", "syslog"],

        }
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    //改变syslog 开关
    changeSyslogSwitch = (value) => {
        this.setState({ syslogSwitchStatus: value })
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
        const syslogSwitchStatusError = isFieldTouched('syslogSwitchStatus') && getFieldError('syslogSwitchStatus');
        const serverTypeError = isFieldTouched('serverType') && getFieldError('serverType');
        const hostNameError = isFieldTouched('hostName') && getFieldError('hostName');
        const backupHostNameError = isFieldTouched('backupHostName') && getFieldError('backupHostName');
        const portError = isFieldTouched('port') && getFieldError('port');
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const repeatPasswordError = isFieldTouched('repeatPassword') && getFieldError('repeatPassword');
        const dbNameError = isFieldTouched('dbName') && getFieldError('dbName');
        const rules = {
            syslogSwitchStatus: [
                {
                    required: true,
                    message: "The filed is required."
                }
            ],
            serverType: [
                {
                    required: true,
                    message: "The filed is required."
                }
            ],
            hostName: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 0 && _.size(value) <= 64 ? callback() : callback("The filed must be in 4-64 characters.")
                    }
                }
            ],
            backupHostName: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 0 && _.size(value) <= 64 ? callback() : callback("The filed must be in 4-64 characters.")
                    }
                }
            ],
            port: [
                {
                    required: true,
                    message: "The filed is required."
                }
            ],
            username: [
                {
                    required: true,
                    message: "The filed is required."
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 1 && _.size(value) <= 64 ? callback() : callback("The filed must be in 4-64 characters.")
                    }
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
            dbName: [
                {
                    required: true,
                    message: 'The filed is required.',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 3 && _.size(value) <= 64 ? callback() : callback("The filed must be in 3-64 characters.")
                    }
                }
            ]
        }

        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        External Log Server
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Send Log to External Server" validateStatus={syslogSwitchStatusError ? 'error' : ''} help={syslogSwitchStatusError || ''}>
                            {getFieldDecorator('syslogSwitchStatus', { initialValue: this.state.syslogSwitchStatus, rules: rules.syslogSwitchStatus })(
                                <Switch style={{ float: "left" }} checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.syslogSwitchStatus} onChange={this.changeSyslogSwitch} />
                            )}
                        </Form.Item>
                        <Form.Item label="Server Type" hasFeedback validateStatus={serverTypeError ? 'error' : ''} help={serverTypeError || ''}>
                            {getFieldDecorator('serverType', { initialValue: this.state.serverType, rules: rules.serverType })(
                                <Select placeholder="Please select" disabled={!this.state.syslogSwitchStatus}>
                                    {
                                        this.state.securityTypeArray.map((item) => {
                                            return <Option key={item} value={item}>{item}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="Host Name/IP Address" hasFeedback validateStatus={hostNameError ? 'error' : ''} help={hostNameError || ''}>
                            {getFieldDecorator('hostName', { initialValue: this.state.hostName, rules: rules.hostName })(
                                <Input disabled={!this.state.syslogSwitchStatus} />
                            )}
                        </Form.Item>

                        <Form.Item label="Backup Host Name/IP Address" validateStatus={backupHostNameError ? 'error' : ''} help={backupHostNameError || ''}>
                            {getFieldDecorator('backupHostName', { initialValue: this.state.backupHostName, rules: rules.backupHostName })(
                                <Input disabled={!this.state.syslogSwitchStatus} />
                            )}
                        </Form.Item>
                        <Form.Item label="Port" validateStatus={portError ? 'error' : ''} help={portError || ''}>
                            {getFieldDecorator('port', { initialValue: this.state.port, rules: rules.port })(
                                <InputNumber style={{ width: "100%" }} min={1} max={65535} onChange={this.onChange} disabled={!this.state.syslogSwitchStatus} />
                            )}
                        </Form.Item>
                        <Form.Item label="Username" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                            {getFieldDecorator('username', { initialValue: this.state.username, rules: rules.username })(
                                <Input disabled={!this.state.syslogSwitchStatus} />
                            )}
                        </Form.Item>
                        <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                            {getFieldDecorator('password', { initialValue: this.state.password, rules: rules.password })(
                                <Input disabled={!this.state.syslogSwitchStatus} />
                            )}
                        </Form.Item>
                        <Form.Item label="Repeat Password" validateStatus={repeatPasswordError ? 'error' : ''} help={repeatPasswordError || ''}>
                            {getFieldDecorator('repeatPassword', { initialValue: this.state.repeatPassword, rules: rules.repeatPassword })(
                                <Input disabled={!this.state.syslogSwitchStatus} />
                            )}
                        </Form.Item>
                        <Form.Item label="DB Name" validateStatus={dbNameError ? 'error' : ''} help={dbNameError || ''}>
                            {getFieldDecorator('dbName', { initialValue: this.state.dbName, rules: rules.dbName })(
                                <Input disabled={!this.state.syslogSwitchStatus} />
                            )}
                        </Form.Item>
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
            </div >
        );
    }
}
const ExternalLogServer = Form.create()(ExternalLogServerRegister);
export default ExternalLogServer;