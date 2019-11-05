import React, { Component } from 'react';
import { Input, Form, Select, Tag, Button } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import TableTransfer from '../../../components/table-transfer/TableTransfer'
const { TextArea } = Input;
const { Option } = Select;


class AddTenantAdminRegister extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.repeatPassword = this.state.password
            this.state.disabled = true
            this.state.mockData = []
            this.state.targetKeys = []
            this.state.mode = "edit"
        } else {
            this.state = {
                name: "",
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

    getMock = () => {
        let selectedArray = []
        const mockData = [
            { key: "1", title: "Default", description: "Read-Only Users", systemDefined: "System-Defined" },
            { key: "2", title: "Network Administrators", description: "Can Do Everything But Edit Accounts", systemDefined: "System-Defined" },
            { key: "3", title: "Administrators", description: "Unrestricted Administrators", systemDefined: "System-Defined" },
            { key: "4", title: "Writers", description: "Can Read and Write to Switches", systemDefined: "System-Defined" }
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
            console.log("selectedArray=" + selectedArray)
        }
        this.setState({ targetKeys: selectedArray })
    };

    //callback
    onChange = nextTargetKeys => {
        console.log(nextTargetKeys)
        this.setState({ targetKeys: nextTargetKeys });
    };

    createTenanAdmin = () => {
        history.push("/administrator/tenant-admin")
    }
    editTenanAdmin = () => {
        history.push("/administrator/tenant-admin")
    }
    cancel = () => {
        history.push("/administrator/tenant-admin")
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const nameError = isFieldTouched('name') && getFieldError('name');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const repeatPasswordError = isFieldTouched('repeatPassword') && getFieldError('repeatPassword');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const assignedRolesError = isFieldTouched('assignedRoles') && getFieldError('assignedRoles');
        const rules = {
            name: [
                {
                    required: true,
                    message: "The field is required."
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
            assignedRoles: [
                {
                    required: true,
                    message: 'The filed is required.',
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
            {
                dataIndex: "systemDefined",
                title: "System-Defined",
                render: (text) => (
                    <Tag color="#108ee9">{text}</Tag>
                )
            }
        ];
        return (
            <div className="samp_panle_form">
                <div className="samp_panel_form_header">
                    <span style={{ paddingLeft: "20px" }}>
                        {
                            this.state.mode === "create" ? "Create Tenant Admin" : "Edit Tenant Admin"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right" style={{ width: "100%" }}>
                        <Form.Item label="Name" validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                            {getFieldDecorator('name', { initialValue: this.state.name, rules: rules.name })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                            {getFieldDecorator('password', { initialValue: this.state.password, rules: rules.password })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Repeat Password" validateStatus={repeatPasswordError ? 'error' : ''} help={repeatPasswordError || ''}>
                            {getFieldDecorator('repeatPassword', { initialValue: this.state.repeatPassword, rules: rules.repeatPassword })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Description" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                            {getFieldDecorator('description', { initialValue: this.state.descrition, rules: rules.descrition })(<TextArea />)}
                        </Form.Item>
                        <Form.Item label="Assigned Roles" validateStatus={assignedRolesError ? 'error' : ''} help={assignedRolesError || ''}>
                            {getFieldDecorator('assignedRoles', { initialValue: this.state.assignedRoles, rules: rules.assignedRoles })(

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
                                        <Button type="primary" onClick={this.createTenanAdmin} htmlType="submit" disabled={hasErrors(getFieldsError()) || this.state.targetKeys.length === 0}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editTenanAdmin} htmlType="submit" disabled={hasErrors(getFieldsError()) || this.state.targetKeys.length === 0}>
                                            Save
                                        </Button> : ""
                                }
                                <Button type="primary" onClick={this.cancel} className="samp_panel_from_footer_button_cancle">Cancel</Button>
                            </div>
                        </div>
                    </Form>
                </div>

            </div>
        );
    }
}
const AddEditTenantAdmin = Form.create()(AddTenantAdminRegister)
export default AddEditTenantAdmin;