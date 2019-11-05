import React, { Component } from 'react';
import { Form, Input, Select, Radio, InputNumber, Checkbox, Button } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
const { Option } = Select
const availableOptions = [
    { label: 'Access Policy', value: 'Access Policy', disabled: false },
    { label: 'Enforcement Policy', value: 'Enforcement Policy', disabled: false },
    { label: 'Radius-DM', value: 'Radius-DM', disabled: false },
]
const list = [
    {
        "id": 1,"key":"1", "name": "User-Name", "accessPolicy": 1, "authEnforcement": 0,
        "availableValues": [], "beUsedIn": "0", "isInit": 1, "syncToRadius": 1,
        "dm": 1, "isDefault": 1, "typeCode": 1, "valueType": "string", "vendorId": -1, "vendorName": "IETF"
    },
    {
        "id": 2, "key":"2","name": "NAS-IP-Address", "accessPolicy": 0, "authEnforcement": 0,
        "availableValues": [], "beUsedIn": "0", "isInit": 1, "syncToRadius": 1,
        "dm": 1, "isDefault": 1, "typeCode": 10, "valueType": "ipaddr", "vendorId": 80, "vendorName": "chenqk"
    },
    {
        "id": 3,"key":"3", "name": "Service-Type", "accessPolicy": 0, "authEnforcement": 0,
        "availableValues": [], "beUsedIn": "0", "isInit": 1, "syncToRadius": 1,
        "dm": 1, "isDefault": 1, "typeCode": 10, "valueType": "integer(limit value)", "vendorId": 55, "vendorName": "chenqk1"
    },
    {
        "id": 4, "key":"4","name": "Session-Timeout", "accessPolicy": 0, "authEnforcement": 0,
        "availableValues": [], "beUsedIn": "0", "isInit": 1, "syncToRadius": 1,
        "dm": 1, "isDefault": 1, "typeCode": 10, "valueType": "integer", "vendorId": 27, "vendorName": "chenqk2"
    },
    {
        "id": 5,"key":"5", "name": "Calling-Station-Id", "accessPolicy": 0, "authEnforcement": 0,
        "availableValues": [], "beUsedIn": "0", "isInit": 1, "syncToRadius": 1,
        "dm": 1, "isDefault": 1, "typeCode": 10, "valueType": "string", "vendorId": 30, "vendorName": "chenqk3"
    },
    {
        "id": 6,"key":"6", "name": "NAS-Identifier", "accessPolicy": 0, "authEnforcement": 0,
        "availableValues": [], "beUsedIn": "0", "isInit": 1, "syncToRadius": 1,
        "dm": 1, "isDefault": 1, "typeCode": 10, "valueType": "string", "vendorId": 15, "vendorName": "chenqk4"
    },
]
class AddRadiusDictionaryRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            let defaultSelectArray = []
            this.state = this.props.location.state[0]
            if (this.state.accessPolicy === 1) defaultSelectArray.push("Access Policy")
            if (this.state.authEnforcement === 1) defaultSelectArray.push("Enforcement Policy")
            if (this.state.dm === 1) defaultSelectArray.push("Radius-DM")
            this.state.defaultSelectArray = defaultSelectArray
            this.state.mode = "edit"
        } else {
            this.state = {
                vendor: "",
                name: "",
                vendorName: "",
                vendorId: "",
                typeCode: 10,
                valueType: "",
                accessPolicy: 0,
                authEnforcement: 0,
                dm: 0,
                mode: "create",
                defaultSelectArray: []

            }
        }
        this.state.valueTypeArray = ["string", "ipaddr", "integer", "integer(limit value)"]
        this.state.nameList = ["User-Name", "NAS-IP-Address", "Service-Type", "Session-Timeout", "Calling-Station-Id", "NAS-Identifier"]
        this.state.isExsitVendor = false
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    createRadiusDic = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // values && values.map((key, value) => {
                //     console.log(key, value);
                // })
                history.push("/policy-engine/radius-dictionary")
            }
        });
    }
    editRadiusDic = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // values && values.map((key, value) => {
                //     console.log(key, value);
                // })
                history.push("/policy-engine/radius-dictionary")
            }
        });
    }
    returnList = () => {
        history.push("/policy-engine/radius-dictionary")
    }
    //改变vendor
    changeVendor = e => {
        this.setState({
            vendor: e.target.value
        })
        if (e.target.value === "IETF") {
            this.setState({
                vendorName: "IETF",
                vendorId: -1,
                isExsitVendor: false
            })
            this.props.form.setFieldsValue({
                vendorName: "IETF",
                vendorId: -1,
                isExsitVendor: false
            })
        } else if (e.target.value === "Alcatel") {
            this.setState({
                vendorName: "Alcatel",
                vendorId: 800,
                isExsitVendor: false
            })
            this.props.form.setFieldsValue({
                vendorName: "Alcatel",
                vendorId: 800,
                isExsitVendor: false
            })
        } else {
            this.setState({
                vendorName: "",
                vendorId: 0,
                isExsitVendor: false
            })
            this.props.form.setFieldsValue({
                vendorName: "",
                vendorId: 0,
                isExsitVendor: false
            })
        }
    }
    //改变available in
    checkedAvailableIn = (checkedValues) => {
        _.indexOf(checkedValues, "Access Policy") >= 0 ? this.setState({ accessPolicy: 1 }) : this.setState({ accessPolicy: 0 })
        _.indexOf(checkedValues, "Enforcement Policy") >= 0 ? this.setState({ authEnforcement: 1 }) : this.setState({ authEnforcement: 0 })
        _.indexOf(checkedValues, "Radius-DM") >= 0 ? this.setState({ dm: 1 }) : this.setState({ dm: 0 })
    }
    //改变vendorname,需要判断vendor是否已经存在，如果存在则vendorid禁用
    changeVendorName = e => {
        console.log(e.target.value)
        this.setState({
            vendorName: e.target.value
        })
        const vendor = _.find(list, ['vendorName', e.target.value]);
        if (vendor) {
            this.setState({
                isExsitVendor: true,
                vendorId: vendor.vendorId
            })
            this.props.form.setFieldsValue({ vendorId: vendor.vendorId })
        } else {
            this.setState({
                isExsitVendor: false,
                vendorId: 0
            })
            this.props.form.setFieldsValue({ vendorId: 0 })
        }
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const vendorError = isFieldTouched('vendor') && getFieldError('vendor');
        const vendorNameError = isFieldTouched('vendorName') && getFieldError('vendorName');
        const vendorIdError = isFieldTouched('vendorId') && getFieldError('vendorId');
        const typeCodeError = isFieldTouched('typeCode') && getFieldError('typeCode');
        const valueTypeError = isFieldTouched('valueType') && getFieldError('valueType');
        const nameError = isFieldTouched('name') && getFieldError('name');
        //rules
        const rules = {
            vendor: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
            ],
            vendorName: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        if (_.size(value) >= 1 && _.size(value) <= 127) {
                            let nameReg = /^([a-zA-Z0-9]+[-]?[a-zA-Z0-9]*)+$/g;
                            let tailReg = /[^-]$/i;
                            nameReg.test(value) && tailReg.test(value) ? callback() : callback("Only symbols - and letters and numbers are allowed, and the length must not be greater than 127.(- can not act as prefix or postfix)");

                        } else {
                            callback("The field must be in 1-127 characters")
                        }
                    }
                }
            ],
            vendorId: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
            ],
            name: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        if (_.size(value) >= 1 && _.size(value) <= 127) {
                            let nameReg = /^([a-zA-Z0-9]+[-]?[a-zA-Z0-9]*)+$/g;
                            let tailReg = /[^-]$/i;
                            nameReg.test(value) && tailReg.test(value) ? callback() : callback("Only symbols - and letters and numbers are allowed, and the length must not be greater than 127.(- can not act as prefix or postfix)");

                        } else {
                            callback("The field must be in 1-127 characters")
                        }
                    }
                },
                {
                    validator: (rule, value, callback) => {
                        list.map((item) => {
                            if (item.name === value && item.vendorName === this.state.vendorName) {
                                callback("The name is exsit !");
                                return;
                            }
                        })
                        callback()

                    }
                }
            ],
            typeCode: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        list.map((item) => {
                            if (item.typeCode === value && item.vendorName === this.state.vendorName) {
                                callback("The name is exsit !");
                                return;
                            }
                        })
                        callback()

                    }
                }
            ],
            valueType: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
            ],
        }
        const children = [];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create Radius Attribute Dictionary" : "Edit Radius Attribute Dictionary"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        {
                            this.state.mode === "create" ?
                                <Form.Item label="Vendor" validateStatus={vendorError ? 'error' : ''} help={vendorError || ''}>
                                    {getFieldDecorator('vendor', { initialValue: this.state.vendor, rules: rules.vendor })(
                                        <Radio.Group style={{ float: "left" }} onChange={this.changeVendor}>
                                            <Radio value="IETF">IETF</Radio>
                                            <Radio value="Alcatel">Alcatel</Radio>
                                            <Radio value="Other">Other</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item> : ""
                        }

                        <Form.Item label="Vendor Name" validateStatus={vendorNameError ? 'error' : ''} help={vendorNameError || ''}>
                            {getFieldDecorator('vendorName', { initialValue: this.state.vendorName, rules: rules.vendorName })(
                                <Input disabled={this.state.vendor !== "Other" || this.state.mode === "edit"} onChange={this.changeVendorName} />
                            )}
                        </Form.Item>
                        <Form.Item label="Vendor ID" validateStatus={vendorIdError ? 'error' : ''} help={vendorIdError || ''}>
                            {getFieldDecorator('vendorId', { initialValue: this.state.vendorId, rules: rules.vendorId })(
                                <InputNumber style={{ width: "100%" }} min={-1} max={16777216} disabled={this.state.vendor !== "Other" || this.state.isExsitVendor || this.state.mode === "edit"} />
                            )}
                        </Form.Item>
                        <Form.Item label="Radius Attribute Name" validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                            {getFieldDecorator('name', { initialValue: this.state.name, rules: rules.name })(
                                <Select disabled={this.state.mode === "edit"}>
                                    {
                                        this.state.nameList && this.state.nameList.map((item) => {
                                            return <Option key={item}>{item}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="Attribute Code" validateStatus={typeCodeError ? 'error' : ''} help={typeCodeError || ''}>
                            {getFieldDecorator('typeCode', { initialValue: this.state.typeCode, rules: rules.typeCode })(
                                <InputNumber style={{ width: "100%" }} min={0} max={255} disabled={this.state.mode === "edit"}></InputNumber>
                            )}
                        </Form.Item>
                        <Form.Item label="Value Type" validateStatus={valueTypeError ? 'error' : ''} help={valueTypeError || ''}>
                            {getFieldDecorator('valueType', { initialValue: this.state.valueType, rules: rules.valueType })(
                                <Select
                                    disabled={this.state.mode === "edit"}
                                    placeholder="Please select"
                                    onChange={this.handleChange}
                                >
                                    {
                                        this.state.valueTypeArray.map((item) => {
                                            return <Option key={item}>{item}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item label="Available In">
                            {getFieldDecorator('availableIn', { initialValue: this.state.defaultSelectArray, rules: [] })(
                                <Checkbox.Group style={{ float: "left" }} options={availableOptions} onChange={this.checkedAvailableIn} />
                            )}
                        </Form.Item>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">

                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createRadiusDic} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editRadiusDic} htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                            Save
                                        </Button> : ""
                                }
                                <Button type="primary" onClick={this.returnList} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const AddRadiusDictionary = Form.create()(AddRadiusDictionaryRegister);

export default AddRadiusDictionary;