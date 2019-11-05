import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import OtherAttributes from '../../../components/other-attribute/OtherAttributes';
import macRules from '../../../components/utils/MacRules'
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

class AddAccessPolicyRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.mode = "edit"
        } else {
            this.state = {
                deviceMac: "",
                deviceName: "",
                employeeAccount: "",
                deviceCategory: "",
                deviceFamily: "",
                deviceOS: "",
                accessRoleProfile: "",
                policyList: "",
                otherAttributesVOs: [],
                mode: "create"
            }
        }
        this.state.deviceCategoryArray = ["Computer", "Mobile", "Game console", "Digital media receiver", "Others"]
        this.state.deviceFamilyArray = ["Alcatel-lucent", "Apple", "Samsung", "Huawei", "Microsoft", "LG", "Lenovo", "HP", "IBM", "Nokia", "MI", "HTC", "Sony", "Blackberry", "Others"]
        this.state.deviceOSArray = ["Linux", "Windows", "MacOS", "Android", "IOS", "Others"]

    }

    componentDidMount() {
        this.props.form.validateFields();
        // if(this.props.location.state.model == "edit"){
        //     this.props.form.setFieldsValue(
        //         this.props.location.state.item
        //     );
        // }
    }
    createNasClient = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/asset-management/company-property")
            }
        });
    }
    returnList = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.map((key, value) => {
                    console.log(key, value);
                })
                history.push("/asset-management/company-property")
            }
        });
    }

    //父组件的other attribute callback函数
    getOtherAttributes = (mappingList) => {
        console.log("父组件----")
        console.log(mappingList)
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const deviceMacError = isFieldTouched('deviceMac') && getFieldError('deviceMac');
        const rules = {
            deviceMac: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        if (!macRules.test(value)) {
                            callback("Please input correct MAC address !")
                        } else {
                            callback()
                        }
                    }
                },
            ],
        }
        const children = [];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create Company Property" : "Edit Company Property"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Device Mac" validateStatus={deviceMacError ? 'error' : ''} help={deviceMacError || ''}>
                            {getFieldDecorator('deviceMac', { initialValue: this.state.deviceMac, rules: rules.deviceMac })(<Input disabled={this.state.mode === "edit"} />)}
                        </Form.Item>
                        <Form.Item label="Device Name" hasFeedback >
                            {getFieldDecorator('deviceName', { initialValue: this.state.deviceName, rules: [] })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Employee Account" >

                            {getFieldDecorator('employeeAccount', { initialValue: this.state.employeeAccount, rules: [] })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Device Category" hasFeedback >
                            {getFieldDecorator('deviceCategory', { initialValue: this.state.deviceCategory, rules: [] })(
                                <Select
                                    placeholder="Please select"
                                >
                                    {
                                        this.state.deviceCategoryArray.map((item) => {
                                            return <Option key={item}>{item}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item label="Device Family">
                            {getFieldDecorator('deviceFamily', { initialValue: this.state.deviceFamily, rules: [] })(
                                <Select
                                    placeholder="Please select"
                                >
                                    {
                                        this.state.deviceFamilyArray.map((item) => {
                                            return <Option key={item}>{item}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="Device OS">
                            {getFieldDecorator('deviceOS', { initialValue: this.state.deviceOS, rules: [] })(
                                <Select
                                    placeholder="Please select"
                                >
                                    {
                                        this.state.deviceOSArray.map((item) => {
                                            return <Option key={item}>{item}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="Access Role Profile">
                            {getFieldDecorator('accessRoleProfile', { initialValue: this.state.accessRoleProfile, rules: [] })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Policy List">
                            {getFieldDecorator('policyList', { initialValue: this.state.policyList, rules: [] })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Other Attributes">
                            {getFieldDecorator('otherAttributesVOs', {
                                rules: [],
                            })(
                                <div>

                                </div>
                            )}
                        </Form.Item>
                        <OtherAttributes attributeOptions={otherOptions} getOtherAttributes={this.getOtherAttributes} mappingList={this.state.otherAttributesVOs} />
                        <br />
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createNasClient} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editNasClient} htmlType="submit" disabled={hasErrors(getFieldsError())}>
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

const AddAccessPolicy = Form.create()(AddAccessPolicyRegister);
export default AddAccessPolicy;