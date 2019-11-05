import React, { Component } from 'react';
import { Form, Input, Select, Radio, Collapse, Switch, Button, InputNumber, Tooltip, Icon } from 'antd';
import _ from "lodash"
import intl from 'react-intl-universal'
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import MappingCondition from '../../../components/mapping-condition/MappingCondition'
import OtherAttributes from '../../../components/other-attribute/OtherAttributes';
const { Panel } = Collapse
const attributeOptions = [
    {
        value: 'Authentication Type',
        name: 'Authentication Type',
        type: "string",
        valueType: "DROP_DOWN",
        children: [
            { name: "802.1X", value: "802.1X" },
            { name: "MAC", value: "MAC" }
        ]
    },
    {
        value: 'Network Type',
        name: 'Network Type',
        type: "string",
        valueType: "DROP_DOWN",
        children: [
            { name: "Wired", value: "Wired" },
            { name: "Wireless", value: "Wireless" }
        ]
    },
    {
        value: 'SSID',
        name: 'SSID',
        type: "string",
        valueType: "DROP_DOWN",
        children: []
    },
    {
        value: 'NAS IP',
        name: 'NAS IP',
        type: "string",
        valueType: "INPUT_VALUE",
        children: []
    },
    {
        value: 'NAS-Identifier',
        name: 'NAS-Identifier',
        type: "string",
        valueType: "INPUT_VALUE",
        children: []
    },
    {
        value: 'NAS PORT ID',
        name: 'NAS PORT ID',
        type: "integer",
        valueType: "INPUT_VALUE",
        children: []
    },
    {
        value: 'Port Desc / WLAN Name',
        name: 'Port Desc / WLAN Name',
        type: "string",
        valueType: "INPUT_VALUE",
        children: []
    },
    {
        value: 'NAS Device Name',
        name: 'NAS Device Name',
        type: "string",
        valueType: "INPUT_VALUE",
        children: []
    },
    {
        value: 'NAS Device Location',
        name: 'NAS Device Location',
        type: "string",
        valueType: "INPUT_VALUE",
        children: []
    },
    {
        value: 'AP Group',
        name: 'AP Group',
        type: "string",
        valueType: "INPUT_VALUE",
        children: []
    }
];

const operatorOptions = [
    { name: "Equals", value: 'Equals' },
    { name: "Equals(Ignore case)", value: 'Equals(Ignore case)' },
    { name: "Contains", value: 'Contains' },
    { name: "Contains(Ignore case)", value: 'Contains(Ignore case)' },
    { name: "Start with", value: 'Start with' },
    { name: "Start with(Ignore case)", value: 'Start with(Ignore case)' },
    { name: "End with", value: 'End with' },
    { name: "End with(Ignore case)", value: 'End with(Ignore case)' },
    { name: "Not Equals To", value: 'Not Equals To' }
]
const operatorOptions_Integer = [
    { name: "Less Than", value: 'Less Than' },
    { name: "Less Than Or Equal", value: 'Less Than Or Equal' },
    { name: "Greater Than", value: 'Greater Than' },
    { name: "Greater Than Or Equal", value: 'Greater Than Or Equal' }
]
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

class AddEditAuthenticationStrategyRegister extends Component {
    constructor(props) {
        super(props);

        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.mode = "edit"
        } else {
            this.state = {
                policyName: "",
                priority: 5,
                conditions: [],
                conditionDemo: 0,
                condition: "",
                selectValue: [],
                strategyName: "",
                authenticationAgainst: "None",
                defaultARPName: "",
                defaultPLName: "",
                otherAttributesVOs: [],
                webAuthentication: "Guest",
                byodStrategy: "",
                guestStrategy: "",
                overwriteARP: "Disabled",
                reloadARP: "Disabled",
                mode: "create"
            }
        }
        console.log("state", this.state)
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
    createNasClient = () => {
        console.log("创建----");
        history.push("/policy-engine/authentication-strategy")
    }
    returnList = () => {
        console.log("取消----");
        history.push("/policy-engine/authentication-strategy")
    }

    changeVlue = () => {

    }

    handleChange = (value) => {
        console.log(value);
        this.setState({
            selectValue: value
        })
    }
    addAuthenticationStrategy = () => {
        let mappingList = this.state.mappingList;
        let selectValue = this.state.selectValue;
        mappingList.push(selectValue)
        this.setState({
            mappingList: mappingList
        })
        if (mappingList.length != 0) {
            this.setState({
                isShow: "block",
            })
        }
        console.log(this.state)
    }
    deleteItem = (item, index) => {
        console.log(item, index)
        let mappingList = this.state.mappingList;
        mappingList.splice(index, 1);
        this.setState({
            mappingList: mappingList
        })
        if (this.state.mappingList.length === 0) {
            this.setState({
                isShow: "none",
            })
        }
    }
    //改变Authentication Against
    changeAuthenticationAgainst = e => {
        console.log(e.target.value)
        this.setState({
            authenticationAgainst: e.target.value
        })
    }
    //改变changeWebAuthentication
    changeWebAuthentication = e => {
        console.log(e.target.value)
        this.setState({
            webAuthentication: e.target.value
        })
    }
    //父组件的other attribute callback函数
    getOtherAttributes = (mappingList) => {
        console.log(mappingList)
    }
    //父组件的callback函数
    getMappingCondition = (mappingList) => {
        console.log(mappingList)
        this.setState({
            conditions: mappingList
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const policyNameError = isFieldTouched('policyName') && getFieldError('policyName');
        const priorityError = isFieldTouched('priority') && getFieldError('priority');
        const conditionDemoError = isFieldTouched('conditionDemo') && getFieldError('conditionDemo');
        const strategyNameError = isFieldTouched('strategyName') && getFieldError('strategyName');
        const authenticationAgainstError = isFieldTouched('authenticationAgainst') && getFieldError('authenticationAgainst');
        const partyRadiusError = isFieldTouched('partyRadius') && getFieldError('partyRadius');
        const defaultARPNameError = isFieldTouched('defaultARPName') && getFieldError('defaultARPName');
        const defaultPLNameError = isFieldTouched('defaultPLName') && getFieldError('defaultPLName');
        const guestStrategyError = isFieldTouched('guestStrategy') && getFieldError('guestStrategy');
        const byodStrategyError = isFieldTouched('byodStrategy') && getFieldError('byodStrategy');
        const webAuthenticationError = isFieldTouched('webAuthentication') && getFieldError('webAuthentication');
        const children = []
        const rules = {
            policyName: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.authenticationStrategy.msg.required"),
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 1 && _.size(value) <= 128 ? callback() : callback(intl.get("samp.policyEngine.authenticationStrategy.msg.policyNameLength"))
                    }
                },
            ],
            conditionDemo: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.authenticationStrategy.msg.required"),
                }
            ],
            conditions: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.authenticationStrategy.msg.required"),
                }
            ],
            partyRadius: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.authenticationStrategy.msg.required"),
                }
            ],
            priority: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.authenticationStrategy.msg.required"),
                },
                {
                    validator: (rule, value, callback) => {
                        value >= 1 && value <= 10 ? callback() : callback(intl.get("samp.policyEngine.authenticationStrategy.msg.policyNameLength"))
                    }
                },
            ],
            strategyName: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.authenticationStrategy.msg.required"),
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 128 && _.size(value) >= 1 ? callback() : callback(intl.get("samp.policyEngine.authenticationStrategy.msg.strategyNameLength"))
                    }
                }
            ],
            authenticationAgainst: [
                {
                    required: true,
                    message: intl.get("samp.policyEngine.authenticationStrategy.msg.required"),
                }
            ],
            defaultARPName: [
                // {
                //     required: true,
                //     message: 'This field is required !',
                // },
            ],
            defaultPLName: [
                // {
                //     required: true,
                //     message: 'This field is required !',
                // },
            ],
            guestStrategy: [

            ],
            byodStrategy: [

            ],
            reloadARP: [],
            overwriteARP: [],
            otherAttributesVOs: [],

        }
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? intl.get("samp.policyEngine.authenticationStrategy.create") : intl.get("samp.policyEngine.authenticationStrategy.edit")
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.strategyName")} validateStatus={strategyNameError ? 'error' : ''} help={strategyNameError || ''}>
                            {getFieldDecorator('strategyName', { initialValue: this.state.strategyName, rules: rules.strategyName })(<Input />)}
                        </Form.Item>
                        <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.authenticationAgainst")} hasFeedback validateStatus={authenticationAgainstError ? 'error' : ''} help={authenticationAgainstError || ''}>
                            {getFieldDecorator('authenticationAgainst', { initialValue: this.state.authenticationAgainst, rules: rules.authenticationAgainst })(
                                <Radio.Group style={{ float: "left" }} onChange={this.changeAuthenticationAgainst}>
                                    <Radio value="None" disabled={this.state.webAuthentication === "None"}>None</Radio>
                                    <Radio value="Local Database">Local Database</Radio>
                                    <Radio value="External LDAP/AD">External LDAP/AD</Radio>
                                    <Radio value="External Radius">External Radius</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        {
                            this.state.authenticationAgainst === "External Radius" ?
                                <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.partyRadius")} validateStatus={partyRadiusError ? 'error' : ''} help={partyRadiusError || ''}>
                                    {getFieldDecorator('partyRadius', { initialValue: this.state.partyRadius, rules: rules.partyRadius })(
                                        <Select placeholder="please select"></Select>
                                    )}
                                </Form.Item> : ""
                        }
                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="Access Policy" key="1" className="samp_collapse_panel_header">
                                <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.policyName")} validateStatus={policyNameError ? 'error' : ''} help={policyNameError || ''}>
                                    {getFieldDecorator('policyName', { initialValue: this.state.policyName, rules: rules.policyName })(<Input />)}
                                </Form.Item>
                                <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.priority")} hasFeedback validateStatus={priorityError ? 'error' : ''} help={priorityError || ''}>
                                    {getFieldDecorator('priority', { initialValue: this.state.priority, rules: rules.priority })(<InputNumber min={1} max={10} style={{ width: "100%" }} />)}
                                </Form.Item>
                                <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.condition")} validateStatus={conditionDemoError ? 'error' : ''} help={conditionDemoError || ''}>
                                    {getFieldDecorator('conditionDemo', { initialValue: this.state.conditionDemo, rules: rules.conditionDemo })(
                                        <Radio.Group style={{ float: "left" }}>
                                            <Radio value={0}>Basic Attribute</Radio>
                                            <Radio value={1}>Advanced Attribute</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <MappingCondition getMappingCondition={this.getMappingCondition} operatorOptions={operatorOptions} operatorOptions_Integer={operatorOptions_Integer} attributeOptions={attributeOptions} mappingList={this.state.conditions} />
                            </Panel>
                        </Collapse>
                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="Network Enforcement Policy" key="1" className="samp_collapse_panel_header">
                                {
                                    this.state.authenticationAgainst === "External LDAP/AD" ?
                                        <Form.Item label={
                                            <span>
                                                <Tooltip placement="top" title="MAC authentication does not support roleMapping.">
                                                    <Icon type="info-circle"></Icon>
                                                </Tooltip> {intl.get("samp.policyEngine.authenticationStrategy.item.condition")}
                                            </span>
                                        } validateStatus={defaultARPNameError ? 'error' : ''} help={defaultARPNameError || ''}>
                                            {getFieldDecorator('enableRoleMapping', { initialValue: this.state.enableRoleMapping, rules: rules.enableRoleMapping })(
                                                <Switch checkedChildren="Enbaled" unCheckedChildren="Disabled" />
                                            )}
                                        </Form.Item> : ""
                                }
                                <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.defaultARPName")} validateStatus={defaultARPNameError ? 'error' : ''} help={defaultARPNameError || ''}>
                                    {getFieldDecorator('defaultARPName', { initialValue: this.state.defaultARPName, rules: rules.defaultARPName })(<Input/>)}
                                </Form.Item>
                                <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.defaultPLName")} validateStatus={defaultPLNameError ? 'error' : ''} help={defaultPLNameError || ''}>
                                    {getFieldDecorator('defaultPLName', { initialValue: this.state.defaultPLName, rules: rules.defaultPLName })(<Input/>)}
                                </Form.Item>
                                <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.otherAttributesVOs")}>
                                    {getFieldDecorator('otherAttributesVOs', {
                                        rules: [],
                                    })(
                                        <div></div>
                                    )}
                                </Form.Item>
                                <OtherAttributes attributeOptions={otherOptions} getOtherAttributes={this.getOtherAttributes} mappingList={this.state.otherAttributesVOs} />
                            </Panel>
                        </Collapse>
                        <Collapse accordion expandIconPosition="right" defaultActiveKey={['1']} className="samp_collapse_style">
                            <Panel header="WEB Redirection Enforcement Policy" key="1" className="samp_collapse_panel_header">
                                <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.webAuthentication")} hasFeedback validateStatus={webAuthenticationError ? 'error' : ''} help={webAuthenticationError || ''}>
                                    {getFieldDecorator('webAuthentication', { initialValue: this.state.webAuthentication, rules: rules.webAuthentication })(
                                        <Radio.Group style={{ float: "left" }} onChange={this.changeWebAuthentication}>
                                            <Radio value="None" disabled={this.state.authenticationAgainst === "None"}>None</Radio>
                                            <Radio value="Guest">Guest</Radio>
                                            <Radio value="Employee">Employee</Radio>
                                            <Radio value="Guest and Employee">Guest and Employee</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                {
                                    (this.state.webAuthentication === "Guest") || (this.state.webAuthentication === "Guest and Employee") ?
                                        <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.guestStrategy")} validateStatus={guestStrategyError ? 'error' : ''} help={guestStrategyError || ''}>
                                            {getFieldDecorator('guestStrategy', { initialValue: this.state.guestStrategy, rules: rules.guestStrategy })(<Select
                                                placeholder="Please select"
                                                initialValue={this.state.autheticationStrageArry}
                                                onChange={this.handleChange}
                                            >
                                                {children}
                                            </Select>)}
                                        </Form.Item> : ""
                                }
                                {
                                    (this.state.webAuthentication === "Employee") || (this.state.webAuthentication === "Guest and Employee") ?
                                        <Form.Item label={intl.get("samp.policyEngine.authenticationStrategy.item.byodStrategy")} validateStatus={byodStrategyError ? 'error' : ''} help={byodStrategyError || ''}>
                                            {getFieldDecorator('byodStrategy', { initialValue: this.state.byodStrategy, rules: rules.byodStrategy })(<Select
                                                placeholder="Please select"
                                                initialValue={this.state.autheticationStrageArry}
                                                onChange={this.handleChange}
                                            >
                                                {children}
                                            </Select>)}
                                        </Form.Item> : ""
                                }
                            </Panel>
                        </Collapse>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createNasClient} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            {intl.get("samp.button.create")}
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editNasClient} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            {intl.get("samp.button.apply")}
                                        </Button> : ""
                                }
                                <Button type="primary" onClick={this.returnList} className="samp_panel_from_footer_button_cancle">{intl.get("samp.button.cancel")}</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}

const AddEditAuthenticationStrategy = Form.create()(AddEditAuthenticationStrategyRegister);
export default AddEditAuthenticationStrategy;