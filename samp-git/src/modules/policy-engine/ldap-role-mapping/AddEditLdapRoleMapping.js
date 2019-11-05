import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Input, Select, Button, InputNumber } from 'antd';
import _ from 'lodash'
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import MappingCondition from '../../../components/mapping-condition/MappingCondition';
import OtherAttributes from '../../../components/other-attribute/OtherAttributes';
const { TextArea } = Input
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

class AddEditLdapRoleMappingRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.mode = "edit"
        } else {
            this.state = {
                name: "",
                priority: "",
                conditions: [],
                defaultPLName: "",
                defaultARPName: "",
                otherAttributesVOs: [],
                mode: "create"
            }
        }
    }

    componentDidMount() {
        this.props.form.validateFields();
        this.setState({ autheticationStrageArry: ["Default Strategy"] })
    }
    //创建
    createNasClient = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/policy-engine/ldap-role-mapping")
            }
        });
    }
    //编辑
    editNasClient = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/policy-engine/ldap-role-mapping")
            }
        });
    }
    //cancle
    returnList = () => {
        console.log("取消----");
        history.push("/policy-engine/ldap-role-mapping")
    }

    changeVlue = () => {

    }

    handleChange = (value) => {
        console.log(value);
        this.setState({
            selectValue: value
        })
    }
    //父组件的callback函数
    getMappingCondition = (mappingList) => {
        this.setState({
            conditions: mappingList
        })
        console.log(this.state.conditions)
    }
    //父组件的other attribute callback函数
    getOtherAttributes = (mappingList) => {
        console.log("父组件----")
        console.log(mappingList)
        this.setState({
            otherAttributesVOs: mappingList
        })
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const nameError = isFieldTouched('name') && getFieldError('name');
        const priorityError = isFieldTouched('priority') && getFieldError('priority');
        const conditionsError = isFieldTouched('conditions') && getFieldError('conditions');
        const defaultARPNameError = isFieldTouched('defaultARPName') && getFieldError('defaultARPName');
        const defaultPLNameError = isFieldTouched('defaultPLName') && getFieldError('defaultPLName');
        const otherAttributesVOsError = isFieldTouched('otherAttributesVOs') && getFieldError('otherAttributesVOs');
        const rules = {
            name: [
                {
                    required: true,
                    message: "The field is required !"
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 32 && _.size(value) >= 1 ? callback() : callback("This field must be in 6-64 characters")
                    }
                }
            ],
            priority: [
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
            conditions: [
                {
                    required: true,
                    message: "The field is required !"
                }
            ],
            defaultARPName: [

            ],
            defaultPLName: [

            ],
            otherAttributesVOs: [

            ]
        }

        const children = [];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create Role Mapping" : "Edit Role Mapping"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Name" validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                            {getFieldDecorator('name', { initialValue: this.state.name, rules: rules.name })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Priority" hasFeedback validateStatus={priorityError ? 'error' : ''} help={priorityError || ''}>
                            {getFieldDecorator('priority', { initialValue: this.state.priority, rules: rules.priority })(<InputNumber min={1} max={99} style={{ width: "100%" }} />)}
                        </Form.Item>
                        <Form.Item label="LDAP/AD Attributes Condition" hasFeedback validateStatus={conditionsError ? 'error' : ''} help={conditionsError || ''}>
                            {getFieldDecorator('conditions', { initialValue: "this.state.conditions", rules: rules.conditions })(
                                <Input style={{ display: "none" }} />
                            )}
                        </Form.Item>
                        <hr />
                        <MappingCondition getMappingCondition={this.getMappingCondition} operatorOptions={operatorOptions} operatorOptions_Integer={operatorOptions_Integer} attributeOptions={attributeOptions} mappingList={this.state.conditions} />
                        <br />
                        <Form.Item label="Default Access Role Profile" validateStatus={defaultARPNameError ? 'error' : ''} help={defaultARPNameError || ''}>
                            {getFieldDecorator('defaultARPName', { initialValue: this.state.defaultARPName, rules: rules.defaultARPName })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Default Policy List" validateStatus={defaultPLNameError ? 'error' : ''} help={defaultPLNameError || ''}>
                            {getFieldDecorator('defaultPLName', { initialValue: this.state.defaultPLName, rules: rules.defaultPLName })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Other Attributes" validateStatus={otherAttributesVOsError ? 'error' : ''} help={otherAttributesVOsError || ''}>
                            {getFieldDecorator('otherAttributesVOs', { initialValue: this.state.otherAttributesVOs, rules: rules.otherAttributesVOs })(
                                <div></div>
                            )}
                        </Form.Item>
                        <OtherAttributes attributeOptions={otherOptions} getOtherAttributes={this.getOtherAttributes} mappingList={this.state.otherAttributesVOs} />
                        <br />
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createLdapRoleMapping} htmlType="submit" disabled={hasErrors(getFieldsError()) || this.state.conditions.length === 0}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editLdapRoleMapping} htmlType="submit" disabled={hasErrors(getFieldsError()) || this.state.conditions.length === 0}>
                                            Save
                                        </Button> : ""
                                }
                                <Button type="primary" onClick={this.returnList} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}

const AddEditLdapRoleMapping = Form.create()(AddEditLdapRoleMappingRegister);
export default AddEditLdapRoleMapping;