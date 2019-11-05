import React, { Component } from 'react';
import { Form, Input, InputNumber, Switch, Button } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'

class LdapAdConfigurationRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ldapSwitch: false,
            serverName: "Default Server",
            serverType: true,
            serverTypeChecked: false,
            serverIP: "",
            backServerIP: "",
            retry: 3,
            timeout: 5,
            port: 389,
            adminName: "",
            adminPasswd: "",
            searchBase: "",
            userNameAttr: "",
            passwdAttr: "",
            objectName: "",
            adWorkgroupName: "",
            adRealm: "",
            adIp: "",
            adUsername: "",
            adPassword: "",
            adPort: 1,
        }

    }

    componentDidMount() {
        this.props.form.validateFields();
        // if(this.props.location.state.model == "edit"){
        //     this.props.form.setFieldsValue(
        //         this.props.location.state.item
        //     );
        // }
        this.setState({ autheticationStrageArry: ["Default Strategy"] })
    }
    //测试
    testConnect = () => {
        console.log("创建----");
    }
    //保存
    save = () => {
        console.log("取消----");
    }
    //取消
    cancel = () => {
        console.log("取消----");
    }

    //改变ldap switch
    changeLdapSwitch = (value) => {
        this.setState({
            ldapSwitch: value
        })
    }
    //改变server type
    changeServerType = (value) => {
        this.setState({
            serverType: value
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const serverIPError = isFieldTouched('serverIP') && getFieldError('serverIP');
        const backServerIPError = isFieldTouched('backServerIP') && getFieldError('backServerIP');
        const portError = isFieldTouched('port') && getFieldError('port');
        const adminNameError = isFieldTouched('adminName') && getFieldError('adminName');
        const adminPasswdError = isFieldTouched('adminPasswd') && getFieldError('adminPasswd');
        const searchBaseError = isFieldTouched('searchBase') && getFieldError('searchBase');
        const userNameAttrError = isFieldTouched('userNameAttr') && getFieldError('userNameAttr');
        const passwdAttrError = isFieldTouched('passwdAttr') && getFieldError('passwdAttr');
        const objectNameError = isFieldTouched('objectName') && getFieldError('objectName');
        const adWorkgroupNameError = isFieldTouched('adWorkgroupName') && getFieldError('adWorkgroupName');
        const adRealmError = isFieldTouched('adRealm') && getFieldError('adRealm');
        const adIpError = isFieldTouched('adIp') && getFieldError('adIp');
        const adUsernameError = isFieldTouched('adUsername') && getFieldError('adUsername');
        const adPasswordError = isFieldTouched('adPassword') && getFieldError('adPassword');
        const adPortError = isFieldTouched('adPort') && getFieldError('adPort');

        const rules = {
            ldapSwitch: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],
            serverName: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],
            serverType: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],
            serverIP: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 64 && _.size(value) >= 4 ? callback() : callback("This field must be in 6-64 characters !")
                    }
                },
            ],
            backServerIP: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 64 && _.size(value) >= 4 ? callback() : callback("This field must be in 6-64 characters !")
                    }
                },
            ],
            port: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],
            adminName: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ],
            adminPasswd: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 32 && _.size(value) >= 1 ? callback() : callback("This field must be in 1-32 characters !")
                    }
                }
            ],
            searchBase: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 64 && _.size(value) >= 8 ? callback() : callback("This field must be in 8-64 characters !")
                    }
                }
            ],
            userNameAttr: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 32 && _.size(value) >= 1 ? callback() : callback("This field must be in 1-32 characters !")
                    }
                }
            ],
            passwdAttr: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 32 && _.size(value) >= 1 ? callback() : callback("This field must be in 1-32 characters !")
                    }
                }
            ],
            objectName: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 32 && _.size(value) >= 1 ? callback() : callback("This field must be in 1-32 characters !")
                    }
                }
            ],
            adWorkgroupName: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 128 && _.size(value) >= 1 ? callback() : callback("This field must be in 1-128 characters !")
                    }
                }
            ],
            adRealm: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 128 && _.size(value) >= 1 ? callback() : callback("This field must be in 1-128 characters !")
                    }
                }
            ],
            adIp: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 64 && _.size(value) >= 4 ? callback() : callback("This field must be in 6-64 characters !")
                    }
                },
            ],
            adUsername: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 128 && _.size(value) >= 1 ? callback() : callback("This field must be in 1-128 characters !")
                    }
                }
            ],
            adPassword: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 128 && _.size(value) >= 1 ? callback() : callback("This field must be in 1-128 characters !")
                    }
                }
            ],
            adPort: [
                {
                    required: true,
                    message: 'The filed is required !',
                }
            ]
        }

        const children = [];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        LDAP/AD Configuration
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="LDAP/AD Server">
                            {getFieldDecorator('ldapSwitch', { initialValue: this.state.ldapSwitch, rules: rules.ldapSwitch })(
                                <Switch style={{ float: "left" }} checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.ldapSwitch} onChange={this.changeLdapSwitch} />
                            )}
                        </Form.Item>
                        <Form.Item label="Server Name" hasFeedback >
                            {getFieldDecorator('serverName', { initialValue: this.state.serverName, rules: rules.serverName })(<Input disabled={true} />)}
                        </Form.Item>
                        <Form.Item label="Server Type" >

                            {getFieldDecorator('serverType', { initialValue: this.state.serverType, rules: rules.serverType })(
                                <Switch style={{ float: "left" }} size="large" checkedChildren="LDAP" unCheckedChildren="AD" checked={this.state.serverType} onChange={this.changeServerType} disabled={!this.state.ldapSwitch}/>
                            )}
                        </Form.Item>
                        {
                            this.state.serverType ?
                                <div>
                                    <Form.Item label="Host Name/IP Address" hasFeedback validateStatus={serverIPError ? 'error' : ''} help={serverIPError || ''}>
                                        {getFieldDecorator('serverIP', { initialValue: this.state.serverIP, rules: rules.serverIP })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>

                                    <Form.Item label="Backup Host Name/IP Address" validateStatus={backServerIPError ? 'error' : ''} help={backServerIPError || ''}>
                                        {getFieldDecorator('backServerIP', { initialValue: this.state.backServerIP, rules: rules.backServerIP })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Retries">
                                        {getFieldDecorator('retry', { initialValue: this.state.retry, rules: [] })(
                                            <InputNumber style={{ width: "100%" }} min={1} max={3} disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Timeout">
                                        {getFieldDecorator('timeout', { initialValue: this.state.timeout, rules: [] })(
                                            <InputNumber style={{ width: "100%" }} min={1} max={30} disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Port" validateStatus={portError ? 'error' : ''} help={portError || ''}>
                                        {getFieldDecorator('port', { initialValue: this.state.port, rules: rules.port })(
                                            <InputNumber style={{ width: "100%" }} min={1} max={65535} disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Admin Name" validateStatus={adminNameError ? 'error' : ''} help={adminNameError || ''}>
                                        {getFieldDecorator('adminName', { initialValue: this.state.adminName, rules: rules.adminName })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Admin Password" validateStatus={adminPasswdError ? 'error' : ''} help={adminPasswdError || ''}>
                                        {getFieldDecorator('adminPasswd', { initialValue: this.state.adminPasswd, rules: rules.adminPasswd })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Search Base" validateStatus={searchBaseError ? 'error' : ''} help={searchBaseError || ''}>
                                        {getFieldDecorator('searchBase', { initialValue: this.state.searchBase, rules: rules.searchBase })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Username Attribution" validateStatus={userNameAttrError ? 'error' : ''} help={userNameAttrError || ''}>
                                        {getFieldDecorator('userNameAttr', { initialValue: this.state.userNameAttr, rules: rules.userNameAttr })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Password Attribution" validateStatus={passwdAttrError ? 'error' : ''} help={passwdAttrError || ''}>
                                        {getFieldDecorator('passwdAttr', { initialValue: this.state.passwdAttr, rules: rules.passwdAttr })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Object Class" validateStatus={objectNameError ? 'error' : ''} help={objectNameError || ''}>
                                        {getFieldDecorator('objectName', { initialValue: this.state.objectName, rules: rules.objectName })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                </div> :
                                <div>
                                    <Form.Item label="NETBIOS Domain Name" validateStatus={adWorkgroupNameError ? 'error' : ''} help={adWorkgroupNameError || ''}>
                                        {getFieldDecorator('adWorkgroupName', { initialValue: this.state.adWorkgroupName, rules: rules.adWorkgroupName })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="DNS Domain Name" validateStatus={adRealmError ? 'error' : ''} help={adRealmError || ''}>
                                        {getFieldDecorator('adRealm', { initialValue: this.state.adRealmError, rules: rules.adRealm })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="FQDN/IP address of Domain Controller" validateStatus={adIpError ? 'error' : ''} help={adIpError || ''}>
                                        {getFieldDecorator('adIp', { initialValue: this.state.adIp, rules: rules.adIp })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Username" validateStatus={adUsernameError ? 'error' : ''} help={adUsernameError || ''}>
                                        {getFieldDecorator('adUsername', { initialValue: this.state.adUsername, rules: rules.adUsername })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Password" validateStatus={adPasswordError ? 'error' : ''} help={adPasswordError || ''}>
                                        {getFieldDecorator('adPassword', { initialValue: this.state.adPassword, rules: rules.adPassword })(
                                            <Input disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="AD Port" validateStatus={adPortError ? 'error' : ''} help={adPortError || ''}>
                                        {getFieldDecorator('adPort', { initialValue: this.state.adPort, rules: rules.adPort })(
                                            <InputNumber style={{ width: "100%" }} min={1} max={65535} disabled={!this.state.ldapSwitch}/>
                                        )}
                                    </Form.Item>
                                </div>
                        }

                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                <Button type="primary" style={{marginRight:"10px"}} onClick={this.testConnect} htmlType="submit" disabled={hasErrors(getFieldsError())}>Test Connect</Button>
                                <Button type="primary" onClick={this.save} htmlType="submit" disabled={hasErrors(getFieldsError())}>Save</Button>
                                <Button type="primary" onClick={this.cancel} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}

const LdapAdConfiguration = Form.create()(LdapAdConfigurationRegister);
export default LdapAdConfiguration;