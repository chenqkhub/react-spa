import React, { Component } from 'react';
import { Form, Input, Select, Radio, Collapse, Switch, Checkbox, Button, Row, Col, Tag, Tooltip, Icon } from 'antd';
import _ from 'lodash'
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import OtherAttributes from '../../../components/other-attribute/OtherAttributes';
import SampTags from '../../../components/tags/SampTags';
const { Option } = Select;
const { Panel } = Collapse
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


class AddEditGuestStrategyRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.requiredAttributions = _.split(this.state.requiredAttributions, ",")
            this.state.mode = "edit"
            this.state.socialMediaAccount === "Enabled" ? this.state.socialMediaAccount = true : this.state.socialMediaAccount = false
            this.state.dataQuotaEnabled === "Enabled" ? this.state.dataQuotaEnabled = true : this.state.dataQuotaEnabled = false
            this.state.enableSelfRegistration === "Enabled" ? this.state.enableSelfRegistration = true : this.state.enableSelfRegistration = false
            this.state.authorizeVerificationCode === "Enabled" ? this.state.authorizeVerificationCode = true : this.state.authorizeVerificationCode = false
            this.state.successNotification === "Enabled" ? this.state.successNotification = true : this.state.successNotification = false
            this.state.wifi4EUSwitch === "Enabled" ? this.state.wifi4EUSwitch = true : this.state.wifi4EUSwitch = false
            if (this.state.adminApproved === 0) this.state.adminApproved = "Disabled"
            else if (this.state.adminApproved === 1) this.state.adminApproved = "Approved By Employee Sponsor"
            else this.state.adminApproved = "Approved By Guest Operator"

            this.state.selfRegisterCustomAttrList = this.state.selfRegisterCustomAttrList.map((item) => {
                console.log(item.name)
                return item.name
            })
        } else {
            this.state = {
                strategyName: "",
                redirectionStrategy: "DefaultPortal",
                protocolMode: "HTTPS",
                fqdnMode: "FQDN",
                authenticationSource: "Local Database",
                loginBy: "Username & Password",
                socialMediaAccount: false,
                portalServerDomain: "456.htanh.qa.ovcirrus.com",
                facebookOAuthClientID: "",
                googlePlusOAuthClientID: "",
                aleRainbowOAuthClientID: "",
                weChatAppID: "",
                weChatShopID: "",
                weChatSecrectKey: "",
                openAppId: "",
                appSecret: "",
                successRedirectUrl: "Go to success page",
                url: "",
                fixedAccessRoleProfile: "",
                fixedPolicyList: "",
                dataQuotaEnabled: false,
                dataQuotaUrl: "",
                otherAttributesVOs: [],
                enableSelfRegistration: false,
                registeredBy: "Guest Name",
                passwordCreationMethod: "Manually",
                adminApproved: "Disabled",
                emailRestriction: "Suffix",
                allowedEmailAddress: ['chenqk@163.com', 'chenqk@126.com', 'chenqk@qq.com'],
                allowedEmailSuffix: ['@163.com', '@126.com', '@qq.com'],
                selfRegisterCustomAttrList: [],
                authorizeVerificationCode: false,
                successNotification: false,
                serviceLevel: "",
                wifi4EUSwitch: false,
                mode: "create",
                requiredAttributions: ["Guest Name", "Password"],
                disabledGuestName: true,
                disabledPassword: true,
                disabledEmailId: false,
                disabledPhoneNumber: false,
                disabledEmployeeId: true,
                facebookDisabled: false,
                googleDisabled: false,
                rainbowDisabled: false,
                weChatDisabled: false,
                socialMediaAccountFlag: true,
                test: function () {
                    console.log("ceshi")
                }
            }
        }
        // this.state.adminApprovedArry = [{ name: "Disabled", vaue: 0 }, { name: "Approved By Employee Sponsor", vaue: 1 }, { name: "Approved By Guest Operator", vaue: 2 }]
        this.state.adminApprovedArry = ["Disabled", "Approved By Employee Sponsor", "Approved By Guest Operator"]
        this.state.serviceLevelArray = ["LV1", "LV2", "LV3", "LV4", "LV5"]
        this.state.redirectionStrategyArry = ["DefaultPortal"]
        this.state.successRedirectUrlArry = ["Go to success page", "Go to initial URL", "Go to fixed URL"]
        this.state.fixedAccessRoleProfileArry = []
        this.state.fixedPolicyListArry = []
        this.state.currnetFQDN = "ov2500-upam-cportal.al-enterprise.com"
        console.log(this.state)
    }

    componentDidMount() {
        this.props.form.validateFields();
    }
    createGuestStrategy = () => {
        console.log("创建----");
        this.props.form.validateFields({ force: true }, (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                // history.push("/policy-engine/guest-strategy")
            }
        });
    }
    returnList = () => {
        console.log("取消----");
        history.push("/policy-engine/guest-strategy")
    }

    changeVlue = () => {

    }

    handleChange = (value) => {
        console.log(value);
        this.setState({
            selectValue: value
        })
    }

    //改变Authentication Against
    changeAuthenticationAgainst = () => {

    }
    //改变changeWebAuthentication
    changeWebAuthentication = () => {

    }
    //选择attibutes
    selectRequiredAttributes = (checkedValues) => {
        console.log('checked = ', checkedValues);
        this.setState({
            requiredAttributions: checkedValues
        })
    }
    //父组件的other attribute callback函数
    getOtherAttributes = (mappingList) => {
        console.log("父组件----")
        console.log(mappingList)
        this.setState({
            otherAttributesVOs: mappingList
        })
    }
    //改变FQDN
    changeFqdnMode = e => {
        this.setState({
            fqdnMode: e.target.value
        })
    }
    //改变login by
    changeLoginBy = e => {
        this.setState({
            loginBy: e.target.value
        })
        if (e.target.value !== "Username & Password") {
            this.setState({
                enableSelfRegistration: false
            })
        }
    }
    //改变changeSocialMediaAccount
    changeSocialMediaAccount = (value) => {
        this.setState({
            socialMediaAccount: value
        })
    }
    //改变success redirect url
    changeSucceeRedirectUrl = (value) => {
        this.setState({
            successRedirectUrl: value
        })
        this.props.form.validateFields();
    }
    //改变changeDataQuotaSwitch
    changeDataQuotaSwitch = (value) => {
        this.setState({
            dataQuotaEnabled: value
        })
    }
    //改变自注册开关
    changeSelfRegistration = (value) => {
        this.setState({
            enableSelfRegistration: value
        })
    }
    //改变自注册方式
    changeRegisterBy = e => {
        this.setState({
            registeredBy: e.target.value
        })
        if (e.target.value === "Guest Name") {
            this.setState({
                requiredAttributions: ["Guest Name", "Password"],
                disabledGuestName: true,
                disabledEmailId: false,
                disabledPassword: true,
                disabledEmployeeId: true,
                disabledPhoneNumber: false
            })
        } else if (e.target.value === "Email Address") {
            this.setState({
                requiredAttributions: ["Email Id", "Password"],
                disabledEmailId: true,
                disabledPassword: true,
                disabledEmployeeId: true,
                disabledGuestName: false,
                disabledPhoneNumber: false
            })
        } else if (e.target.value === "Phone Number") {
            this.setState({
                requiredAttributions: ["Phone Number", "Password"],
                disabledPhoneNumber: true,
                disabledEmailId: false,
                disabledPassword: true,
                disabledEmployeeId: true,
                disabledGuestName: false
            })
        }
    }
    //改变是否自定创建密码
    changePasswordCreationMethod = e => {
        this.setState({
            passwordCreationMethod: e.target.value
        })
        let requiredAttributions = this.state.requiredAttributions
        if (e.target.value === "Manually") {

            if (_.indexOf(requiredAttributions, "Password") < 0) {
                requiredAttributions.push("Password")
            }
        } else if (e.target.value === "Automatically") {
            if (_.indexOf(requiredAttributions, "Password") > 0) {
                requiredAttributions = _.remove(requiredAttributions, function (value) {
                    return value !== "Password";
                });
            }
        }
        let options = []
        requiredAttributions.map((item) => {
            options.push(item)
        })
        this.setState({
            requiredAttributions: options,
        })
    }
    //改变admin approved
    changeAdminApproved = (value) => {
        this.setState({
            adminApproved: value
        })
        let requiredAttributions = this.state.requiredAttributions
        if (value === "Approved By Employee Sponsor") {
            requiredAttributions.push("Employee Email ID")
        } else {
            requiredAttributions = _.remove(requiredAttributions, function (value) {
                return value !== "Employee Email ID";
            });
        }
        let options = []
        requiredAttributions.map((item) => {
            options.push(item)
        })
        this.setState({
            requiredAttributions: options,
        })
    }
    //改变Email Restriction
    changeEmailRestriction = e => {
        console.log(e.target.value)
        this.setState({
            emailRestriction: e.target.value
        })
    }
    //处理tags
    getSuffixTags = (tags) => {
        console.log("父组件suffix", tags)
        this.setState({
            allowedEmailSuffix: tags
        })
    }
    getFullEmallTags = (tags) => {
        console.log("父组件full email", tags)
        this.setState({
            allowedEmailAddress: tags
        })
    }
    getCustomTags = (tags) => {
        console.log("父组件custom", tags)
        this.setState({
            selfRegisterCustomAttrList: tags
        })
    }
    //改变google，Facebook rainbow 以及WeChat的CheckBox
    changeFacebookBox = e => {
        console.log(e.target.checked)
        this.setState({
            facebookDisabled: e.target.checked
        })
    }
    changeGoogleBox = e => {
        console.log(e.target.checked)
        this.setState({
            googleDisabled: e.target.checked
        })
    }
    changeRainbowBox = e => {
        console.log(e.target.checked)
        this.setState({
            rainbowDisabled: e.target.checked
        })
    }
    changeWechatBox = e => {
        console.log(e.target.checked)
        this.setState({
            weChatDisabled: e.target.checked
        })
    }
    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const strategyNameError = isFieldTouched('strategyName') && getFieldError('strategyName');
        const redirectionStrategyError = isFieldTouched('redirectionStrategy') && getFieldError('redirectionStrategy');
        const authenticationSourceError = isFieldTouched('authenticationSource') && getFieldError('authenticationSource');
        const socialMediaAccountError = isFieldTouched('socialMediaAccount') && getFieldError('socialMediaAccount');
        const portalServerDomainError = isFieldTouched('portalServerDomain') && getFieldError('portalServerDomain');
        const facebookOAuthClientIDError = isFieldTouched('facebookOAuthClientID') && getFieldError('facebookOAuthClientID');
        const googlePlusOAuthClientIDError = isFieldTouched('googlePlusOAuthClientID') && getFieldError('googlePlusOAuthClientID');
        const aleRainbowOAuthClientIDError = isFieldTouched('aleRainbowOAuthClientID') && getFieldError('aleRainbowOAuthClientID');
        const weChatAppIDError = isFieldTouched('weChatAppID') && getFieldError('weChatAppID');
        const successRedirectUrlError = isFieldTouched('successRedirectUrl') && getFieldError('successRedirectUrl');
        const urlError = isFieldTouched('url') && getFieldError('url');
        const emailRestrictionError = isFieldTouched('emailRestriction') && getFieldError('emailRestriction');
        const allowedEmailAddressError = isFieldTouched('allowedEmailAddress') && getFieldError('allowedEmailAddress');
        const allowedEmailSuffixError = isFieldTouched('allowedEmailSuffix') && getFieldError('allowedEmailSuffix');

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
            socialMediaAccount: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            portalServerDomain: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            facebookOAuthClientID: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            googlePlusOAuthClientID: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            weChatAppID: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            aleRainbowOAuthClientID: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            successRedirectUrl: [
                {
                    required: true,
                    message: "The field is required !"
                },
                // {
                //     validator: (rule, value, callback) => {
                //         console.log("jiaoyan url");
                //         if (this.state.successRedirectUrl === "Go to fixed URL") {
                //             this.props.form.validateFields(['url'], { force: true });
                //         }
                //         callback();
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
            ],
            emailRestriction: [
                {
                    required: true,
                    message: "The field is required !"
                },
            ],
            allowedEmailSuffix: [
                {
                    required: true,
                    message: "The field is required !"
                },
            ],
            allowedEmailAddress: [
                {
                    required: true,
                    message: "The field is required !"
                },
            ]
        }
        const children = [];

        return (
            <div className="samp_panle_form" >
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create Guest Strategy" : "Edit Guest Strategy"
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
                                    onChange={this.handleChange}
                                >
                                    {
                                        this.state.redirectionStrategyArry && this.state.redirectionStrategyArry.map((item, index) => {
                                            return <Option key={index} value={item}>{item}</Option>
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
                            {getFieldDecorator('authenticationResource', { initialValue: this.state.authenticationSource, rules: rules.authenticationSource })(
                                <Radio.Group style={{ float: "left" }} onChange={this.changeAuthenticationAgainst}>
                                    <Radio value="Local Database">Local Database</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>

                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="Login Strategy" key="1" style={{}} className="samp_collapse_panel_header">
                                <Form.Item label="Login By">
                                    {getFieldDecorator('loginBy', { initialValue: this.state.loginBy, rules: [] })(
                                        <Radio.Group style={{ float: "left" }} onChange={this.changeLoginBy}>
                                            <Radio value="Username & Password">Username & Password</Radio>
                                            <Radio value="Terms & Condition">Terms & Condition</Radio>
                                            <Radio value="Access Code">Access Code</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item label="Social Media Account" validateStatus={socialMediaAccountError ? 'error' : ''} help={socialMediaAccountError || ''}>
                                    {getFieldDecorator('socialMediaAccount', { initialValue: this.state.socialMediaAccount, rules: rules.socialMediaAccount })(
                                        <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.socialMediaAccount} onChange={this.changeSocialMediaAccount} />
                                    )}
                                </Form.Item>
                                {
                                    this.state.socialMediaAccount ?
                                        <div>
                                            <Form.Item label={
                                                <span>
                                                    <Tooltip title="Configure DNS Server to direct this domain to the correct UPAM portal IP">
                                                        <Icon type="info-circle" />
                                                    </Tooltip> Portal Server Domain
                                                </span>
                                            } hasFeedback validateStatus={portalServerDomainError ? 'error' : ''} help={portalServerDomainError || ''}>
                                                {getFieldDecorator('portalServerDomain', { initialValue: this.state.portalServerDomain, rules: rules.portalServerDomain })(
                                                    <Input disabled={true} />
                                                )}
                                            </Form.Item>
                                            <Form.Item label={
                                                <span>
                                                    <Checkbox checked={this.state.facebookDisabled} onChange={this.changeFacebookBox}></Checkbox> Facebook OAuth Client ID
                                                </span>
                                            } hasFeedback validateStatus={facebookOAuthClientIDError ? 'error' : ''} help={facebookOAuthClientIDError || ''}>
                                                {getFieldDecorator('facebookOAuthClientID', { initialValue: this.state.facebookOAuthClientID, rules: rules.facebookOAuthClientID })(
                                                    <Input disabled={!this.state.facebookDisabled} />
                                                )}
                                            </Form.Item>
                                            <Form.Item label={
                                                <span>
                                                    <Checkbox checked={this.state.googleDisabled} onChange={this.changeGoogleBox}></Checkbox> Google Plus OAuth Client ID
                                                </span>
                                            } hasFeedback validateStatus={googlePlusOAuthClientIDError ? 'error' : ''} help={googlePlusOAuthClientIDError || ''}>
                                                {getFieldDecorator('googlePlusOAuthClientID', { initialValue: this.state.googlePlusOAuthClientID, rules: rules.googlePlusOAuthClientID })(
                                                    <Input disabled={!this.state.googleDisabled} />
                                                )}
                                            </Form.Item>
                                            <Form.Item label={
                                                <span>
                                                    <Checkbox checked={this.state.rainbowDisabled} onChange={this.changeRainbowBox}></Checkbox> Rainbow OAuth Client ID
                                                </span>
                                            } hasFeedback validateStatus={aleRainbowOAuthClientIDError ? 'error' : ''} help={aleRainbowOAuthClientIDError || ''}>
                                                {getFieldDecorator('rainbowOAuthClientID', { initialValue: this.state.aleRainbowOAuthClientID, rules: rules.aleRainbowOAuthClientID })(
                                                    <Input disabled={!this.state.rainbowDisabled} />
                                                )}
                                            </Form.Item>
                                            <Form.Item label={
                                                <span>
                                                    <Checkbox checked={this.state.weChatDisabled} onChange={this.changeWechatBox}></Checkbox> Wechat AppID
                                                </span>
                                            } hasFeedback validateStatus={weChatAppIDError ? 'error' : ''} help={weChatAppIDError || ''}>
                                                {getFieldDecorator('wechatAppID', { initialValue: this.state.weChatAppID, rules: rules.weChatAppID })(
                                                    <Input disabled={!this.state.weChatDisabled} />
                                                )}
                                            </Form.Item>
                                            {/* <Form.Item label="Shop Id" hasFeedback >
                                                {getFieldDecorator('wechatShowID', { initialValue: this.state.weChatShopID, rules: [] })(
                                                    <Input />
                                                )}
                                            </Form.Item>
                                            <Form.Item label="SecretKey" hasFeedback >
                                                {getFieldDecorator('weChatSecrectKey', { initialValue: this.state.weChatSecrectKey, rules: [] })(
                                                    <Input />
                                                )}
                                            </Form.Item>
                                            <Form.Item label="Open APP ID" hasFeedback >
                                                {getFieldDecorator('openAppId', { initialValue: this.state.openAppId })(
                                                    <Input />
                                                )}
                                            </Form.Item> */}
                                            <Form.Item label="APP Secret" hasFeedback >
                                                {getFieldDecorator('appSecret', { initialValue: this.state.appSecret, rules: [] })(
                                                    <Input />
                                                )}
                                            </Form.Item>
                                            {
                                                this.state.socialMediaAccountFlag ?
                                                    <Row>
                                                        <Col span={5}></Col>
                                                        <Col>
                                                            <span style={{ color: "red" }}>At least choose Facebook OAuth Client ID or Google Plus OAuth Client ID or Rainbow OAuth Client ID or WeChat APP ID.
                                                            </span>
                                                        </Col>
                                                    </Row> : ""
                                            }
                                        </div> : ""
                                }
                                <Form.Item label="Success Redirect URL" hasFeedback validateStatus={successRedirectUrlError ? 'error' : ''} help={successRedirectUrlError || ''}>
                                    {getFieldDecorator('successRedirectUrl', {
                                        initialValue: this.state.successRedirectUrl, rules: rules.successRedirectUrl
                                    })(
                                        <Select
                                            placeholder="Please select"
                                            onChange={this.changeSucceeRedirectUrl}
                                        >
                                            {
                                                this.state.successRedirectUrlArry && this.state.successRedirectUrlArry.map((item, index) => {
                                                    return <Option key={index} value={item}>{item}</Option>
                                                })
                                            }
                                        </Select>)}
                                </Form.Item>
                                {
                                    this.state.successRedirectUrl === "Go to fixed URL" ?
                                        <Form.Item label="Fixed URL" hasFeedback validateStatus={urlError ? 'error' : ''} help={urlError || ''}>
                                            {getFieldDecorator('url', { initialValue: this.state.url, rules: rules.url })(
                                                <Input />
                                            )}
                                        </Form.Item> : ""
                                }

                            </Panel>
                        </Collapse>
                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="Post Portal Authentication Enforcement" key="1" className="samp_collapse_panel_header">
                                <Form.Item label="Fixed Access Role Profile">
                                    {getFieldDecorator('fixedAccessRoleProfile', { initialValue: this.state.fixedAccessRoleProfile, rules: [], })(<Input/>)}
                                </Form.Item>
                                <Form.Item label="Fixed Policy List">
                                    {getFieldDecorator('fixedPolicyList', { initialValue: this.state.fixedPolicyList, rules: [], })(<Input/> )}
                                </Form.Item>
                                <Form.Item label="Data Quota Status" >
                                    {getFieldDecorator('dataQuotaEnabled', { initialValue: this.state.dataQuotaEnabled, rules: [] })(
                                        <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.dataQuotaEnabled} onChange={this.changeDataQuotaSwitch} />)}
                                </Form.Item>
                                <Form.Item label="Quota Exhausted URL">
                                    {getFieldDecorator('dataQuotaUrl', { initialValue: this.state.dataQuotaUrl, rules: [] })(
                                        <Input disabled={!this.state.dataQuotaEnabled} />)}
                                </Form.Item>
                                <Form.Item label="Other Attributes">
                                    {getFieldDecorator('otherAttributesVOs', {})(
                                        <div>

                                        </div>
                                    )}
                                </Form.Item>
                                <OtherAttributes attributeOptions={otherOptions} getOtherAttributes={this.getOtherAttributes} mappingList={this.state.otherAttributesVOs} />
                            </Panel>
                        </Collapse>

                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="Self-Registration Strategy" key="1" className="samp_collapse_panel_header">

                                <Form.Item label="Self-Registration">
                                    {getFieldDecorator('enableSelfRegistration', { initialValue: this.state.enableSelfRegistration })(
                                        <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" disabled={this.state.loginBy !== "Username & Password"} checked={this.state.enableSelfRegistration} onChange={this.changeSelfRegistration} />
                                    )}
                                </Form.Item>
                                {
                                    this.state.enableSelfRegistration ?
                                        <div>
                                            <Form.Item label="Account Name Created By">
                                                {getFieldDecorator('registeredBy', { initialValue: this.state.registeredBy, rules: [] })(
                                                    <Radio.Group style={{ float: "left" }} onChange={this.changeRegisterBy}>
                                                        <Radio value="Guest Name">Guest Name</Radio>
                                                        <Radio value="Email Address">Email Address</Radio>
                                                        <Radio value="Phone Number">Phone Number</Radio>
                                                    </Radio.Group>
                                                )}
                                            </Form.Item>
                                            <Form.Item label="Password Creation">
                                                {getFieldDecorator('passwordCreationMethod', { initialValue: this.state.passwordCreationMethod, rules: [] })(
                                                    <Radio.Group style={{ float: "left" }} onChange={this.changePasswordCreationMethod}>
                                                        <Radio value="Manually">Manually</Radio>
                                                        <Radio value="Automatically">Automatically</Radio>
                                                    </Radio.Group>
                                                )}
                                            </Form.Item>
                                            <Form.Item label="Approval">
                                                {getFieldDecorator('adminApproved', { initialValue: this.state.adminApproved })(
                                                    <Select
                                                        placeholder="Please select"
                                                        onChange={this.changeAdminApproved}
                                                    >
                                                        {
                                                            this.state.adminApprovedArry && this.state.adminApprovedArry.map((item, index) => {
                                                                return <Option key={index} value={item}>{item}</Option>
                                                            })
                                                        }
                                                    </Select>)}
                                            </Form.Item>
                                            {
                                                this.state.adminApproved === "Approved By Employee Sponsor" ?
                                                    <div>
                                                        <Form.Item label="Email Restriction">
                                                            {getFieldDecorator('emailRestriction', { initialValue: this.state.emailRestriction })(
                                                                <Radio.Group style={{ float: "left" }} onChange={this.changeEmailRestriction}>
                                                                    <Radio value="Suffix">Suffix</Radio>
                                                                    <Radio value="Full Email">Full Email</Radio>
                                                                </Radio.Group>
                                                            )}
                                                        </Form.Item>
                                                        {
                                                            this.state.emailRestriction === "Suffix" ?
                                                                <Form.Item label="Email Suffix" validateStatus={allowedEmailSuffixError ? 'error' : ''} help={allowedEmailSuffixError || ''}>
                                                                    {getFieldDecorator('allowedEmailSuffix', { initialValue: this.state.allowedEmailSuffix, rules: rules.allowedEmailSuffix })(
                                                                        <div className="samp_tags_div">
                                                                            <SampTags tags={this.state.allowedEmailSuffix} getSuffixTags={this.getSuffixTags} type="suffix" />
                                                                        </div>

                                                                    )}
                                                                </Form.Item> : ""
                                                        }
                                                        {
                                                            this.state.emailRestriction === "Full Email" ?
                                                                <Form.Item label="Full Email Address" validateStatus={allowedEmailAddressError ? 'error' : ''} help={allowedEmailAddressError || ''}>
                                                                    {getFieldDecorator('allowedEmailAddress', { initialValue: this.state.allowedEmailAddress, rules: rules.allowedEmailAddress })(
                                                                        <div className="samp_tags_div">
                                                                            <SampTags tags={this.state.allowedEmailAddress} getFullEmallTags={this.getFullEmallTags} type="full email" />
                                                                        </div>
                                                                    )}
                                                                </Form.Item> : ""
                                                        }

                                                    </div> : ""
                                            }

                                            <Form.Item label="Required Attributions">
                                                {getFieldDecorator('requiredAttributions', { initialValue: this.state.requiredAttributions })(
                                                    <Checkbox.Group onChange={this.selectRequiredAttributes} style={{ width: "100%" }}>
                                                        <Row>
                                                            <Col span={6}><Checkbox value="Guest Name" disabled={this.state.disabledGuestName}>Guest Name</Checkbox></Col>
                                                            <Col span={6}><Checkbox value="Password" disabled={this.state.disabledPassword}>Password</Checkbox></Col>
                                                            <Col span={6}><Checkbox value="Full Name" >Full Name</Checkbox></Col>
                                                            <Col span={6}><Checkbox value="Email Id" disabled={this.state.disabledEmailId}>Email Id</Checkbox></Col>
                                                        </Row>
                                                        <Row>
                                                            <Col span={6}><Checkbox value="Phone Number" disabled={this.state.disabledPhoneNumber}>Phone Number</Checkbox></Col>
                                                            <Col span={6}><Checkbox value="Company" >Company</Checkbox></Col>
                                                            <Col span={6}><Checkbox value="Position" >Position</Checkbox></Col>
                                                            <Col span={6}><Checkbox value="Department" >Department</Checkbox></Col>
                                                        </Row>
                                                        <Row>
                                                            <Col span={6}><Checkbox value="Country or Region" >Country or Region</Checkbox></Col>
                                                            <Col span={6}><Checkbox value="Employee Visited" >Employee Visited</Checkbox></Col>
                                                            <Col span={6}><Checkbox value="Employee Email ID" disabled={this.state.disabledEmployeeId}>Employee Email ID</Checkbox></Col>
                                                            <Col span={6}><Checkbox value="Employee Phone Number">Employee Phone Number</Checkbox></Col>
                                                        </Row>
                                                        <Row>
                                                            <Col span={6}><Checkbox value="Reason Visited" >Reason Visited</Checkbox></Col>
                                                        </Row>
                                                    </Checkbox.Group>
                                                )}
                                            </Form.Item>
                                            <Form.Item label={
                                                <span>
                                                    <Tooltip title="The inputBox of custom attribute on portal page required 1-255 characters.">
                                                        <Icon type="info-circle" />
                                                    </Tooltip> Custom Attributes
                                                </span>
                                            }
                                            >
                                                {getFieldDecorator('selfRegisterCustomAttrList', { initialValue: this.state.selfRegisterCustomAttrList })(
                                                    <div className="samp_tags_div">
                                                        <SampTags tags={this.state.selfRegisterCustomAttrList} type="custom" getCustomTags={this.getCustomTags} />
                                                    </div>
                                                )}
                                            </Form.Item>
                                            <Form.Item label={
                                                <span>
                                                    <Tooltip title="If the email or phone number is required, send a verification code to specified address for ensure the email or phone number is correct.">
                                                        <Icon type="info-circle" />
                                                    </Tooltip> Authorize By Verification Code
                                                </span>
                                            }
                                            >
                                                {getFieldDecorator('authorizeVerificationCode', { initialValue: this.state.authorizeVerificationCode })(
                                                    <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.authorizeVerificationCode} />
                                                )}
                                            </Form.Item>
                                            <Form.Item label={
                                                <span>
                                                    <Tooltip title="Displays the account information such as name and password on the registration result page.">
                                                        <Icon type="info-circle" />
                                                    </Tooltip> Password Visibility
                                                </span>
                                            }
                                            >
                                                {getFieldDecorator('successNotification', { initialValue: this.state.successNotification })(
                                                    <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" checked={this.state.successNotification} />
                                                )}
                                            </Form.Item>
                                            <Form.Item label={
                                                <span>
                                                    <Tooltip title="When service level is set to None, settings of Registration Strategy in Global Configuration will take affect for guest self registration.">
                                                        <Icon type="info-circle" />
                                                    </Tooltip> Service Level
                                                </span>
                                            }
                                            >
                                                {getFieldDecorator('serviceLevel', { initialValue: this.state.serviceLevel, rules: [] })(<Select
                                                    placeholder="Please select"
                                                    onChange={this.handleChange}
                                                >
                                                    {
                                                        this.state.serviceLevelArray.map((item, index) => {
                                                            return <Option key={index} value={item}>{item}</Option>
                                                        })
                                                    }
                                                </Select>)}
                                            </Form.Item>
                                        </div> : ""
                                }

                            </Panel>
                        </Collapse>
                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="WiFi4EU" key="1" className="samp_collapse_panel_header">
                                <Form.Item label={
                                    <span>
                                        <Tooltip title="Need to specify dedicated Redirect Strategy(Portal Page).">
                                            <Icon type="info-circle" />
                                        </Tooltip> WiFi4EU
                                    </span>
                                }
                                >
                                    {getFieldDecorator('enableSelfRegistration', { initialValue: this.state.enableSelfRegistration })(
                                        <Switch checkedChildren="Enabled" unCheckedChildren="Disabled" disabled={true} onChange={this.changeSelfRegistration} />
                                    )}
                                </Form.Item>
                            </Panel>
                        </Collapse>
                        <br />

                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createGuestStrategy} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editGuestStrategy} htmlType="submit" disabled={hasErrors(getFieldsError()) || (this.state.successRedirectUrl === "Go to fixed URL" && this.state.url === "")}>
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

const AddEditGuestStrategy = Form.create()(AddEditGuestStrategyRegister);
export default AddEditGuestStrategy;