import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Input, Select, Button } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import TableTransfer from '../../../components/table-transfer/TableTransfer'
import OtherAttributes from "../../../components/other-attribute/OtherAttributes"
const { TextArea } = Input
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

class AddEmployeeAccountRegister extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.repeatPassword = this.state.password
            this.state.disabled = true
            this.state.mockData = []
            this.state.targetKeys = []
            this.state.mode = "edit"
        } else {
            this.state = {
                username: "",
                password: "",
                repeatPassword: "",
                telephone: "",
                email: "",
                accessRoleProfile: "",
                policyList: "",
                otherAttributesVOs: [],
                fullName: "",
                department: "",
                position: "",
                descrition: "",
                mode: "create",
                disabled: false,
                mockData: [],//数据集合
                targetKeys: [],//已选则的数据
                showSearch: true,//是否显示搜索框
                disabled: false//是否禁用transfer
            }
        }
    }

    componentDidMount() {
        this.props.form.validateFields();
        this.getMock();
    }
    //callback
    onChange = nextTargetKeys => {
        console.log(nextTargetKeys)
        this.setState({ targetKeys: nextTargetKeys });
    };

    getMock = () => {
        let selectedArray = []
        const mockData = [
            { key: "1", title: "Han", description: "Huaxin Aotian Network Technology Co., Ltd." },
            { key: "2", title: "Han-HR", description: "Human resources of Huaxin Aotian." },
            { key: "3", title: "Han-Finance", description: "Finance Department of Huaxin Aotian." },
            { key: "4", title: "Han-Dev", description: "R&D Department of Huaxin Aotian." },
            { key: "5", title: "Han-Test", description: "Testing Department of Huaxin Aotian" }
        ]

        this.setState({
            mockData: mockData,
        })
        if (this.state.mode === "edit") {
            this.state.memberOf.map((item) => {
                let data = _.find(mockData, ["title", item])
                if (data) {
                    selectedArray.push(data.key)
                }
            })
        }
        this.setState({ targetKeys: selectedArray })
    };
    createEmployeeAccount = () => {
        history.push("/user-center/employee-account")
    }
    editEmployeeAccount = () => {
        history.push("/user-center/employee-account")
    }
    cancel = () => {
        history.push("/user-center/employee-account")
    }

    //父组件的other attribute callback函数
    getOtherAttributes = (mappingList) => {
        console.log("父组件----", mappingList)
        console.log(mappingList)
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const repeatPasswordError = isFieldTouched('repeatPassword') && getFieldError('repeatPassword');
        const telephoneError = isFieldTouched('telephone') && getFieldError('telephone');
        const emailError = isFieldTouched('email') && getFieldError('email');
        const fullNameError = isFieldTouched('fullName') && getFieldError('fullName');
        const departmentError = isFieldTouched('department') && getFieldError('department');
        const positionError = isFieldTouched('position') && getFieldError('position');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const memberOfError = isFieldTouched('memberOf') && getFieldError('memberOf');
        const rules = {
            username: [
                {
                    required: true,
                    message: "The field is required."
                },
                {
                    validator: (rule, value, callback) => {
                        if (_.size(value) >= 1 && _.size(value) <= 32) {
                            const reg = /^[-A-Za-z0-9.:_/@]*$/
                            reg.test(value) ? callback() : callback("The field can only contain: 1-9 a-z A-Z /. - : _ @")
                        } else callback("The field must be in 1-32 characters.")
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
            telephone: [
                {
                    validator: (rule, value, callback) => {
                        const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
                        reg.test(value) ? callback() : callback("Invalid phone number, please enter a valid phone number.")
                    }
                }
            ],
            email: [
                {
                    type: "email",
                    message: "Invalid emial, please enter a valid emial."
                }
            ],
            fullName: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 32 ? callback() : callback("The field must be in 0-32 characters.")
                    }
                }
            ],
            department: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 32 ? callback() : callback("The field must be in 0-32 characters.")
                    }
                }
            ],
            position: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 32 ? callback() : callback("The field must be in 0-32 characters.")
                    }
                }
            ],
            description: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) <= 255 ? callback() : callback("The field must be in 0-32 characters.")
                    }
                }
            ],
            memberOf: [
                {
                    required: true,
                    message: "The field is required."
                }
            ]
        }
        const columns = [
            {
                dataIndex: 'title',
                title: 'Name',
            },
            {
                dataIndex: 'description',
                title: 'Description',
            },
        ];

        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create Employee Account" : "Edit Employee Account"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Username" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                            {getFieldDecorator('username', { initialValue: this.state.username, rules: rules.username })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                            {getFieldDecorator('password', { initialValue: this.state.password, rules: rules.password })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="Repeat Password" validateStatus={repeatPasswordError ? 'error' : ''} help={repeatPasswordError || ''}>
                            {getFieldDecorator('repeatPassword', { initialValue: this.state.repeatPassword, rules: rules.repeatPassword })(
                                <Input.Password />
                            )}
                        </Form.Item>
                        <Form.Item label="Telephone" validateStatus={telephoneError ? 'error' : ''} help={telephoneError || ''}>
                            {getFieldDecorator('telephone', { initialValue: this.state.telephone, rules: rules.telephone })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Email" validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
                            {getFieldDecorator('email', { initialValue: this.state.email, rules: rules.email })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Access Role Profile" hasFeedback >
                            {getFieldDecorator('accessRoleProfile', { initialValue: this.state.accessRoleProfile, rules: [] })(<Input/>)}
                        </Form.Item>

                        <Form.Item label="Policy List">
                            {getFieldDecorator('policyList', { initialValue: this.state.policyList, rules: [] })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Other Attributes">
                            {getFieldDecorator('otherAttributesVOs', {})(
                                <div>
                                </div>
                            )}
                        </Form.Item>
                        <OtherAttributes attributeOptions={otherOptions} getOtherAttributes={this.getOtherAttributes} mappingList={this.state.otherAttributesVOs} />
                        <br />
                        <Form.Item label="Full Name" validateStatus={fullNameError ? 'error' : ''} help={fullNameError || ''}>
                            {getFieldDecorator('fullName', { initialValue: this.state.fullName, rules: rules.fullName })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Department" validateStatus={departmentError ? 'error' : ''} help={departmentError || ''}>
                            {getFieldDecorator('department', { initialValue: this.state.department, rules: rules.department })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Position" validateStatus={positionError ? 'error' : ''} help={positionError || ''}>
                            {getFieldDecorator('position', { initialValue: this.state.position, rules: rules.position })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="Description" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                            {getFieldDecorator('description', { initialValue: this.state.descrition, rules: rules.descrition })(
                                <TextArea style={{ width: '100%' }}></TextArea>
                            )}
                        </Form.Item>
                        <Form.Item label="Member Of Group(s)" validateStatus={memberOfError ? 'error' : ''} help={memberOfError || ''}>
                            {getFieldDecorator('memberOf', { rules: rules.memberOf })(
                                <div>
                                    <TableTransfer
                                        dataSource={this.state.mockData}
                                        targetKeys={this.state.targetKeys}
                                        disabled={this.state.disabled}
                                        showSearch={this.state.showSearch}
                                        onChange={this.onChange}
                                        filterOption={(inputValue, item) =>
                                            item.title.indexOf(inputValue) !== -1 || item.description.indexOf(inputValue) !== -1
                                        }
                                        leftColumns={columns}
                                        rightColumns={columns}
                                    />
                                </div>
                            )}
                        </Form.Item>
                        <br />
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createEmployeeAccount} htmlType="submit" disabled={hasErrors(getFieldsError()) || this.state.targetKeys.length === 0}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editEmployeeAccount} htmlType="submit" disabled={hasErrors(getFieldsError()) || this.state.targetKeys.length === 0}>
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

const AddEditEmployeeAccount = Form.create()(AddEmployeeAccountRegister);
export default AddEditEmployeeAccount;