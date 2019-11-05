import React, { Component } from 'react';
import { Form, Input, Select, Radio, InputNumber, Button } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
const { TextArea } = Input
const { Option } = Select

class AddEditExternalRadiusRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.repeatSharedSecret = this.state.sharedSecret
            this.state.mode = "edit"
        } else {
            this.state = {
                serverName: "",
                hostName: "",
                backupHostName: "",
                retries: 3,
                timeout: 3,
                sharedSecret: "",
                repeatSharedSecret: "",
                authenticationPort: 1812,
                accountingPort: 1813,
                mode: "create"
            }
        }
    }

    componentDidMount() {
        this.props.form.validateFields();
        // if(this.props.location.state.model == "edit"){
        //     this.props.form.setFieldsValue(
        //         this.props.location.state.item
        //     );
        // }
    }
    createExternalRadius = () => {
        console.log("创建----");
        history.push("/policy-engine/external-radius")
    }
    editExternalRadius = () => {
        console.log("创建----");
        history.push("/policy-engine/external-radius")
    }
    cancel = () => {
        console.log("取消----");
        history.push("/policy-engine/external-radius")
    }

    //父组件的callback函数
    getMappingCondition = (mappingList) => {
        console.log("父组件")
        console.log(mappingList)
        this.setState({
            conditions: mappingList
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const serverNameError = isFieldTouched('serverName') && getFieldError('serverName');
        const hostNameError = isFieldTouched('hostName') && getFieldError('hostName');
        const backupHostNameError = isFieldTouched('backupHostName') && getFieldError('backupHostName');
        const retriesError = isFieldTouched('retries') && getFieldError('retries');
        const timeoutError = isFieldTouched('timeout') && getFieldError('timeout');
        const sharedSecretError = isFieldTouched('sharedSecret') && getFieldError('sharedSecret');
        const repeatSharedSecretError = isFieldTouched('repeatSharedSecret') && getFieldError('repeatSharedSecret');
        const authenticationPortError = isFieldTouched('authenticationPort') && getFieldError('authenticationPort');
        const accountingPortError = isFieldTouched('accountingPort') && getFieldError('accountingPort');
        //rules
        const rules = {
            serverName: [
                {
                    required: true,
                    message: 'The field is required.',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 1 && _.size(value) <= 128 ? callback() : callback("This field must be in 1-128 characters.")
                    }
                },
            ],
            hostName: [
                {
                    required: true,
                    message: 'The field is required.',
                }
            ],

            backupHostName: [
                {

                }
            ],
            retries: [
                {
                    required: true,
                    message: 'The field is required.',
                },
            ],
            timeout: [
                {
                    required: true,
                    message: 'The field is required.',
                },
            ],
            sharedSecret: [
                {
                    required: true,
                    message: 'The filed is required.',
                },
                {
                    validator: (rule, value, callback) => {
                        const { form } = this.props;
                        if (value) {
                            form.validateFields(['repeatSharedSecret'], { force: true });
                        }
                        callback();
                    }
                }
            ],
            repeatSharedSecret: [
                {
                    required: true,
                    message: 'The filed is required.',
                },
                {
                    validator: (rule, value, callback) => {
                        const { form } = this.props;
                        if (value && value !== form.getFieldValue('sharedSecret')) {
                            callback('Two passwords that you enter is inconsistent!');
                        } else {
                            callback();
                        }
                    }
                }
            ],
            authenticationPort: [
                {
                    required: true,
                    message: 'The filed is required.',
                }
            ],
            accountingPort: [
                {
                    required: true,
                    message: 'The filed is required.',
                }
            ],
        }
        const children = [];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create External Radius" : "Edit External Radius"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Server Name" validateStatus={serverNameError ? 'error' : ''} help={serverNameError || ''}>
                            {getFieldDecorator('serverName', { initialValue: this.state.serverName, rules: rules.serverName })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Host Name/IP Address" hasFeedback validateStatus={hostNameError ? 'error' : ''} help={hostNameError || ''}>
                            {getFieldDecorator('hostName', { initialValue: this.state.hostName, rules: rules.hostName })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Backup Host Name/IP Address" >

                            {getFieldDecorator('backupHostName', { initialValue: this.state.backupHostName, rules: rules.backupHostName })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Retries" validateStatus={retriesError ? 'error' : ''} help={retriesError || ''}>
                            {getFieldDecorator('authenticationStrategy', { initialValue: this.state.retries, rules: rules.retries })(
                                <InputNumber min={1} max={65535} style={{width:"100%"}}/>)}
                        </Form.Item>
                        <Form.Item label="Timeout" validateStatus={timeoutError ? 'error' : ''} help={timeoutError || ''}>
                            {getFieldDecorator('timeout', { initialValue: this.state.timeout, rules: rules.timeout })(
                                <InputNumber min={1} max={65535} style={{width:"100%"}}/>)}
                        </Form.Item>
                        <Form.Item label="Shared Secret" validateStatus={sharedSecretError ? 'error' : ''} help={sharedSecretError || ''}>
                            {getFieldDecorator('sharedSecret', { initialValue: this.state.sharedSecret, rules: rules.sharedSecret })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="Confirm Secret" validateStatus={repeatSharedSecretError ? 'error' : ''} help={repeatSharedSecretError || ''}>
                            {getFieldDecorator('repeatSharedSecret', { initialValue: this.state.repeatSharedSecret, rules: rules.repeatSharedSecret })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="Authentication Port" validateStatus={authenticationPortError ? 'error' : ''} help={authenticationPortError || ''}>
                            {getFieldDecorator('authenticationStrategy', { initialValue: this.state.authenticationPort, rules: rules.authenticationPort })(
                                <InputNumber min={1} max={65535} style={{width:"100%"}}/>)}
                        </Form.Item>
                        <Form.Item label="Accounting Port" validateStatus={accountingPortError ? 'error' : ''} help={accountingPortError || ''}>
                            {getFieldDecorator('accountingPort', { initialValue: this.state.accountingPort, rules: rules.accountingPort })(
                                <InputNumber min={1} max={65535} style={{width:"100%"}}/>)}
                        </Form.Item>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createExternalRadius} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editExternalRadius} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            Save
                                        </Button> : ""
                                }
                                <Button type="primary" onClick={this.cancel} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}

const AddEditExternalRadius = Form.create()(AddEditExternalRadiusRegister);
export default AddEditExternalRadius;