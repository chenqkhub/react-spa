import React, { Component } from 'react';
import { Input, Form, Select, Tag, Button } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'
import TableTransfer from '../../../components/table-transfer/TableTransfer'
const { TextArea } = Input
class AddTenantStructureRegister extends Component {
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
    //callback
    onChange = nextTargetKeys => {
        console.log(nextTargetKeys)
        this.setState({ targetKeys: nextTargetKeys });
    };

    getMock = () => {
        let selectedArray = []
        const mockData = [
            { key: "1", title: "Default", description: "Read-Only Users", highestPriviligedRole: "", systemDefined: "System-Defined" },
            { key: "2", title: "Network Administrators", description: "Can Do Everything But Edit Accounts", highestPriviligedRole: "", systemDefined: "System-Defined" },
            { key: "3", title: "Administrators", description: "Unrestricted Administrators", highestPriviligedRole: "", systemDefined: "System-Defined" },
            { key: "4", title: "Writer", description: "Can Read and Write to Switches", highestPriviligedRole: "", systemDefined: "System-Defined" },
            { key: "5", title: "Reader", description: "Read-Only Users", highestPriviligedRole: "", systemDefined: "System-Defined" }
        ]

        this.setState({
            mockData: mockData,
        })
        if (this.state.mode === "edit") {
            console.log(this.state.assignedRoles)
            this.state.assignedRoles.map((item) => {
                let data = _.find(mockData, ["title", item])
                if (data) {
                    selectedArray.push(data.key)
                }
            })
        }
        this.setState({ targetKeys: selectedArray })
    };
    createTenanStructure = () => {
        history.push("/user-center/tenant-structure")
    }
    editTenanStructure = () => {
        history.push("/user-center/tenant-structure")
    }
    cancel = () => {
        history.push("/user-center/tenant-structure")
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const nameError = isFieldTouched('name') && getFieldError('name');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const assignedRolesError = isFieldTouched('assignedRoles') && getFieldError('assignedRoles');
        const rules = {
            name: [
                {
                    required: true,
                    message: "The field is required."
                }
            ],
            assignedRoles: [
                {
                    required: true,
                    message: 'The filed is required.',
                }
            ],
            description: [
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 0 && _.size(value) <= 255 ? callback() : callback("The filed must be in 0-255 characters.")
                    }
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
                            this.state.mode === "create" ? "Create Tenant Structure" : "Edit Tenant Structure"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Name" validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                            {getFieldDecorator('name', { initialValue: this.state.name, rules: rules.name })(<Input />)}
                        </Form.Item>

                        <Form.Item label="Description" validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                            {getFieldDecorator('description', { initialValue: this.state.descrition, rules: rules.descrition })(
                                <TextArea style={{ width: '100%' }}></TextArea>
                            )}
                        </Form.Item>
                        <Form.Item label="User Role(s)" validateStatus={assignedRolesError ? 'error' : ''} help={assignedRolesError || ''}>
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
                                        <Button type="primary" onClick={this.createTenanStructure} htmlType="submit" disabled={hasErrors(getFieldsError()) || this.state.targetKeys.length === 0}>
                                            Create
                                        </Button> : ""
                                }
                                {
                                    this.state.mode === "edit" ?
                                        <Button type="primary" onClick={this.editTenanStructure} htmlType="submit" disabled={hasErrors(getFieldsError()) || this.state.targetKeys.length === 0}>
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

const TenantStructure = Form.create()(AddTenantStructureRegister);
export default TenantStructure;