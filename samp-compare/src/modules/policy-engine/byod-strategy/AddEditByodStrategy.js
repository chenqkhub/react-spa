import React, { Component } from 'react';
import { Form, Input, Select, Radio, Collapse, Switch, InputNumber, Button } from 'antd';
import _ from 'lodash'
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import OtherAttributes from '../../../components/other-attribute/OtherAttributes'
const { Panel } = Collapse
const { Option } = Select
const otherOptions = [
    {
        value: 'Session-Timeout',
        name: 'Session-Timeout',
        type: "integer",
        valueType: "INPUT_VALUE"
    },
    {
        value: 'Acct-Interim-Interval',
        name: 'Acct-Interim-Interval',
        type: "integer",
        valueType: "INPUT_VALUE"
    },
    {
        value: 'WISPr-Bandwidth-Max-Up',
        name: 'WISPr-Bandwidth-Max-Up',
        type: "integer",
        valueType: "INPUT_VALUE"
    },
    {
        value: 'WISPr-Bandwidth-Max-Down',
        name: 'WISPr-Bandwidth-Max-Down',
        type: "integer",
        valueType: "INPUT_VALUE"
    }
]

class AddEditByodStrategyRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.mode = "edit"
        } else {
            this.state = {
                strategyName: "",
                redirectionStrategy: "DefaultPortal",
                protocolMode: "HTTPS",
                fqdnMode: "FQDN",
                authenticationSource: "Local Database",
                partyRadius: "DefaultRadius",
                enableRoleMapping: "Enabled",
                fqdnMode: "FQDN",
                periodUnit: "Day(s)",
                rememberDevice: true,
                expireFlag: 0,
                deviceValidityPeriod: 30,
                maxDeviceNumberPerAccount: 5,
                successRedirectUrl: "Go to success page",
                url: "",
                fixedAccessRoleProfile: "",
                fixedPolicyList: "",
                otherAttributesVOs: [],
                mode: "create"
            }
        }
        this.state.redirectionStrategyArry = ["DefaultPortal"]
        this.state.successRedirectUrlArry = ["Go to success page", "Go to initial URL", "Go to fixed URL"]
        this.state.periodUnitArry = ["Day(s)", "Hour(s)", "Minute(s)"]
        this.state.fixedAccessRoleProfileArry = []
        this.state.partyRadiusArray = ["DefaultRadius"]
        this.state.fixedPolicyListArry = []
        this.state.currnetFQDN = "ov2500-upam-cportal.al-enterprise.com"
    }

    componentDidMount() {
        this.props.form.validateFields();
    }
    //创建
    createByodStrategy = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/policy-engine/byod-strategy")
            }
        });
    }
    //编辑
    editByodStrategy = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/policy-engine/byod-strategy")
            }
        });
    }
    returnList = () => {
        console.log("取消----");
        history.push("/policy-engine/byod-strategy")
    }
    //改变Authentication Resource
    changeAuthenticationSource = e => {
        this.setState({
            authenticationSource: e.target.value
        })
        console.log(this.state.authenticationSource)
    }
    changeFqdnMode = e => {
        this.setState({
            fqdnMode: e.target.value
        })
    }
    //改变Remember device
    changeRememberDevice = (checked) => {
        console.log(checked)
        this.setState({
            rememberDevice: checked
        })
    }
    //改变expire 
    changeExpireFlag = e => {
        this.setState({
            expireFlag: e.target.value
        })
    }
    //改变success url
    changeSuccessRedirectUrl = (value) => {
        this.setState({
            successRedirectUrl: value
        })
        if (value === "Go to fixed URL") {
            this.props.form.validateFields();
        }
    }
    //父组件的other attribute callback函数
    getOtherAttributes = (mappingList) => {
        console.log("父组件----")
        console.log(mappingList)
        this.setState({
            otherAttributesVOs: mappingList
        })
    }
    //form校验在隐藏下是生效的，除非再次渲染组件，需要额外控制
    //校验url是否为空
    changeTheUrlValue = e => {
        console.log(e.target.value)
        this.setState({
            url: e.target.value
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const strategyNameError = isFieldTouched('strategyName') && getFieldError('strategyName');
        const redirectionStrategyError = isFieldTouched('redirectionStrategy') && getFieldError('redirectionStrategy');
        const authenticationSourceError = isFieldTouched('authenticationSource') && getFieldError('authenticationSource');
        const partyRadiusError = isFieldTouched('partyRadius') && getFieldError('partyRadius');
        const periodUnitError = isFieldTouched('periodUnit') && getFieldError('periodUnit');
        const rememberDeviceError = isFieldTouched('rememberDevice') && getFieldError('rememberDevice');
        const expireFlagError = isFieldTouched('expireFlag') && getFieldError('expireFlag');
        const deviceValidityPeriodError = isFieldTouched('deviceValidityPeriod') && getFieldError('deviceValidityPeriod');
        const maxDeviceNumberPerAccountError = isFieldTouched('maxDeviceNumberPerAccount') && getFieldError('maxDeviceNumberPerAccount');
        const successRedirectUrlError = isFieldTouched('successRedirectUrl') && getFieldError('successRedirectUrl');
        const urlError = isFieldTouched('url') && getFieldError('url');
        const rules = {
            strategyName: [
                {
                    required: true,
                    message: "The field is required !"
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 128 && _.size(value) >= 1 ? callback() : callback("This field must be in 1-128 characters")
                    }
                }
            ],
            redirectionStrategy: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            authenticationSource: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            partyRadius: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            periodUnit: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            rememberDevice: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            expireFlag: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            deviceValidityPeriod: [
                {
                    required: true,
                    message: "The field is required !"
                },
                {
                    validator: (rule, value, callback) => {
                        value <= 99 && value >= 1 ? callback() : callback("This field must be in 1-99 characters")
                    }
                }
            ],
            maxDeviceNumberPerAccount: [
                {
                    required: true,
                    message: "The field is required !"
                },
                {
                    validator: (rule, value, callback) => {
                        value <= 99 && value >= 1 ? callback() : callback("This field must be in 1-99 characters")
                    }
                }
            ],
            successRedirectUrl: [
                {
                    required: true,
                    message: "The field is required !"
                },
                // {
                //     validator: (rule, value, callback) => {
                //         if (value === "Go to fixed URL") {
                //             const { form } = this.props;
                //             form.validateFields(['url'], { force: true });
                //             callback();
                //         }
                //     }
                // }
            ],
            url: [
                {
                    required: true,
                    message: "The field is required !"
                },
                {
                    validator: (rule, value, callback) => {
                        var strRegex = "(http|https):///*";
                        var re = new RegExp(strRegex);
                        if (re.test(value)) {
                            if (_.size(value) >= 6 && _.size(value) <= 128) {
                                callback();
                            } else {
                                callback("This url must be in 6-128 characters !")
                            }
                        } else {
                            callback("Please input correct URL !")
                        }
                    }
                },
            ]
        }
        
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create BYOD Strategy" : "Edit BYOD Strategy"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Strategy Name" validateStatus={strategyNameError ? 'error' : ''} help={strategyNameError || ''}>
                            {getFieldDecorator('strategyName', { initialValue: this.state.strategyName, rules: rules.strategyName })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Redirection Strategy" validateStatus={redirectionStrategyError ? 'error' : ''} help={redirectionStrategyError || ''}>
                            {getFieldDecorator('redirectionStrategy', { initialValue: this.state.redirectionStrategy, rules: rules.redirectionStrategy })(
                                <Select
                                    placeholder="Please select"
                                >
                                    {
                                        this.state.redirectionStrategyArry && this.state.redirectionStrategyArry.map((item) => {
                                            return <Option key={item} value={item}>{item}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="Mode">
                            {getFieldDecorator('protocolMode', { initialValue: this.state.protocolMode, rules: [] })(
                                <Radio.Group style={{ float: "left" }}>
                                    <Radio value="HTTPS">https</Radio>
                                    <Radio value="HTTP">http</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        <Form.Item label="IP/FQDN">
                            {getFieldDecorator('fqdnMode', { initialValue: this.state.fqdnMode, rules: [] })(
                                <Radio.Group style={{ float: "left" }} onChange={this.changeFqdnMode}>
                                    <Radio value="FQDN">FQDN</Radio>
                                    <Radio value="IP">IP</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        {
                            this.state.fqdnMode == "FQDN" ?
                                <Form.Item label="Current FQDN">
                                    {getFieldDecorator('currentFQDN', {
                                        rules: [
                                        ],
                                    })(
                                        <div style={{ textAlign: "left" }}>{this.state.currnetFQDN}</div>
                                    )}
                                </Form.Item> : ""
                        }

                        <Form.Item label="Authentication Source" hasFeedback validateStatus={authenticationSourceError ? 'error' : ''} help={authenticationSourceError || ''}>
                            {getFieldDecorator('authenticationSource', { initialValue: this.state.authenticationSource, rules: rules.authenticationSource })(
                                <Radio.Group style={{ float: "left" }} onChange={this.changeAuthenticationSource}>
                                    <Radio value="Local Database">Local Database</Radio>
                                    <Radio value="External LDAP/AD">External LDAP/AD</Radio>
                                    <Radio value="External Radius">External Radius</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        {
                            this.state.authenticationSource === "External Radius" ?
                                <Form.Item label="External Radius" validateStatus={partyRadiusError ? 'error' : ''} help={partyRadiusError || ''}>
                                    {getFieldDecorator('partyRadius', { initialValue: this.state.partyRadius, rules: rules.partyRadius })(
                                        <Select
                                            placeholder="Please select"
                                        >
                                            {
                                                this.state.partyRadiusArray && this.state.partyRadiusArray.map((item) => {
                                                    return <Option value={item} key={item}>{item}</Option>
                                                })
                                            }
                                        </Select>
                                    )}
                                </Form.Item> : ""
                        }

                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="Registration Strategy" key="1" className="samp_collapse_panel_header">
                                {
                                    this.state.authenticationSource === "External LDAP/AD" ?
                                        <Form.Item label="Enable Role Mapping">
                                            {getFieldDecorator('enableRoleMapping', { initialValue: this.state.enableRoleMapping, rules: [] })(
                                                <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" defaultChecked />
                                            )}
                                        </Form.Item> : ""
                                }
                                <Form.Item label="Period Unit" validateStatus={periodUnitError ? 'error' : ''} help={periodUnitError || ''}>
                                    {getFieldDecorator('periodUnit', { initialValue: this.state.periodUnit, rules: rules.periodUnit })(
                                        <Select
                                            placeholder="Please select"
                                        >
                                            {
                                                this.state.periodUnitArry && this.state.periodUnitArry.map((item) => {
                                                    return <Option value={item} key={item}>{item}</Option>
                                                })
                                            }
                                        </Select>)}
                                </Form.Item>
                                <Form.Item label="Remember Device" validateStatus={rememberDeviceError ? 'error' : ''} help={rememberDeviceError || ''}>
                                    {getFieldDecorator('rememberDevice', { initialValue: this.state.rememberDevice, rules: rules.rememberDevice })(
                                        <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" defaultChecked onChange={this.changeRememberDevice} />
                                    )}
                                </Form.Item>
                                {
                                    this.state.rememberDevice ?
                                        <div>
                                            <Form.Item label="Expire Setting" hasFeedback validateStatus={expireFlagError ? 'error' : ''} help={expireFlagError || ''}>
                                                {getFieldDecorator('expireFlag', { initialValue: this.state.expireFlag, rules: rules.expireFlag })(
                                                    <Radio.Group style={{ float: "left" }} onChange={this.changeExpireFlag}>
                                                        <Radio value={-1}>Never Expire</Radio>
                                                        <Radio value={0}>Customization</Radio>
                                                    </Radio.Group>
                                                )}
                                            </Form.Item>
                                            {
                                                this.state.expireFlag === 0 ?
                                                    <div>
                                                        <Form.Item label="Device Validity Period" hasFeedback validateStatus={deviceValidityPeriodError ? 'error' : ''} help={deviceValidityPeriodError || ''}>
                                                            {getFieldDecorator('deviceValidityPeriodd', { initialValue: this.state.deviceValidityPeriod, rules: rules.deviceValidityPeriod })(
                                                                <InputNumber style={{ width: "100%" }} min={1} max={10} initialValue={3} onChange={this.changeDeviceValidityPeriod} />
                                                            )}
                                                        </Form.Item>
                                                        <Form.Item label="Max Device Number Per Account" hasFeedback validateStatus={maxDeviceNumberPerAccountError ? 'error' : ''} help={maxDeviceNumberPerAccountError || ''}>
                                                            {getFieldDecorator('maxDeviceNumberPerAccount', { initialValue: this.state.maxDeviceNumberPerAccount, rules: rules.maxDeviceNumberPerAccount })(
                                                                <InputNumber style={{ width: "100%" }} min={1} max={10} />
                                                            )}
                                                        </Form.Item>
                                                    </div> : ""
                                            }
                                        </div> : ""
                                }

                            </Panel>
                        </Collapse>
                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="WEB Redirection Enforcement Policy" key="1" className="samp_collapse_panel_header">
                                <Form.Item label="Success Redirect URL" validateStatus={successRedirectUrlError ? 'error' : ''} help={successRedirectUrlError || ''}>
                                    {getFieldDecorator('successRedirectUrl', { initialValue: this.state.successRedirectUrl, rules: rules.successRedirectUrl })(
                                        <Select
                                            placeholder="Please select"
                                            onChange={this.changeSuccessRedirectUrl}
                                        >
                                            {
                                                this.state.successRedirectUrlArry && this.state.successRedirectUrlArry.map((item) => {
                                                    return <Option key={item} value={item}>{item}</Option>
                                                })
                                            }
                                        </Select>)}
                                </Form.Item>
                                {
                                    this.state.successRedirectUrl === "Go to fixed URL" ?
                                        <Form.Item label="Fixed URL" validateStatus={urlError ? 'error' : ''} help={urlError || ''}>
                                            {getFieldDecorator('url', { initialValue: this.state.url, rules: rules.url })(
                                                <Input onChange={this.changeTheUrlValue} />
                                            )}
                                        </Form.Item> : ""
                                }

                            </Panel>
                        </Collapse>

                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="Post Portal Authentication Enforcement" key="1" className="samp_collapse_panel_header">

                                <Form.Item label="Fixed Access Role Profile">
                                    {getFieldDecorator('fixedAccessRoleProfile', { initialValue: this.state.fixedAccessRoleProfile, rules: [] })(<Input/>)}
                                </Form.Item>
                                <Form.Item label="Fixed Policy List">
                                    {getFieldDecorator('fixedPolicyList', { initialValue: this.state.fixedPolicyList, rules: [] })(<Input/>)}
                                </Form.Item>

                                <Form.Item label="Other Attributes">
                                    {getFieldDecorator('otherAttributesVOs', { initialValue: this.state.fixedPolicyList, rules: [] })(
                                        <div>
                                        </div>
                                    )}
                                </Form.Item>
                                <OtherAttributes attributeOptions={otherOptions} getOtherAttributes={this.getOtherAttributes} mappingList={this.state.otherAttributesVOs} />
                            </Panel>
                        </Collapse>
                        <br />
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createByodStrategy} htmlType="submit" disabled={hasErrors(getFieldsError()) || (this.state.successRedirectUrl === "Go to fixed URL" && this.state.url === "")}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editByodStrategy} htmlType="submit" disabled={hasErrors(getFieldsError()) || (this.state.successRedirectUrl === "Go to fixed URL" && this.state.url === "")}>
                                            Save
                                        </Button> : ""
                                }
                                <Button type="primary" onClick={this.returnList} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div >
            </div >
        );
    }
}

const AddEditByodStrategy = Form.create()(AddEditByodStrategyRegister);
export default AddEditByodStrategy;