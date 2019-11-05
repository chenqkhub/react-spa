import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import _ from "lodash"
import history from '../../../history/History'
import hasErrors from '../../../components/form-component/FormChecked'
import formItemLayout from '../../../components/form-component/FormItemLayout'

class AddLdapRoleMappingRegister extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location)
        if (this.props.location.mode === "edit") {
            this.state = this.props.location.state[0]
            this.state.mode = "edit"
        } else {
            this.state = {
                name: "",
                mode: "create"
            }
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
    createLdapAttribute = () => {
        console.log("创建----");
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // values && values.map((key, value) => {
                //     console.log(key, value);
                // })
                history.push("/policy-engine/ldap-attribute")
            }
        });
    }
    returnList = () => {
        console.log("取消----");
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // values.map((key, value) => {
                //     console.log(key, value);
                // })
                history.push("/policy-engine/ldap-attribute")
            }
        });
    }

    changeVlue = () => {

    }

    handleChange = (value) => {
        console.log(value);
        this.setState({
            selectValue: value
        })
    }
    handleChangeOther = (value) => {
        console.log(value);
        this.setState({
            otherSelectValue: value
        })
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const nameError = isFieldTouched('name') && getFieldError('name');
        const rules = {
            name: [
                {
                    required: true,
                    message: 'The filed is required !',
                },
                {
                    validator: (rule, value, callback) => {
                        _.size(value) >= 1 && _.size(value) <= 128 ? callback() : callback("This name must be in 1-128 characters !")
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
                            this.state.mode === "create" ? "Create LDAP Attribute" : "Edit LDAP Attribute"
                        }
                    </span>
                </div>
                <div className="samp_panel_form_body">
                    <Form {...formItemLayout} labelAlign="right">
                        <Form.Item label="Name" validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                            {getFieldDecorator('name', { initialValue: this.state.name, rules: rules.name })(<Input />)}
                        </Form.Item>
                        <div className="samp_panel_from_footer">
                            <div className="samp_panel_from_footer_button">
                                {
                                    this.state.mode === "create" ?
                                        <Button type="primary" onClick={this.createLdapAttribute} htmlType="submit" disabled={hasErrors(getFieldsError())}>
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

const AddLdapRoleMapping = Form.create()(AddLdapRoleMappingRegister);
export default AddLdapRoleMapping;